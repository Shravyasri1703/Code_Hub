import React, { useEffect, useState, useCallback } from 'react'
import Search from '../Components/Search'
import SortRepos from '../Components/SortRepos'
import ProfileInfo from '../Components/ProfileInfo'
import Repos from '../Components/Repos'
import Spinner from '../Components/Spinner'
import toast from 'react-hot-toast'

function HomePage() {
	const [userProfile, setuserProf] = useState(null)
	const [repos, setRepos] = useState([])
	const [loading, setLoading] = useState(false)
	const [sortType, setsortType] = useState('forks')

   const getUserProfileandRepos = useCallback( async (username="Shravyasri1703") =>{
	 setLoading(true)
        try{
			const res = await fetch(`http://localhost:5000/api/users/profile/${username}`)
			const { repos, userProfile} = await res.json()
			
			setRepos(repos)
			setuserProf(userProfile)
			 console.log(userProfile)
			 console.log(repos)
			 return {userProfile, repos}
		  setLoading(false)
		}
		catch(err){
          toast.error(err.message)
		}
		finally{
			setLoading(false)
		}
   },[])

	useEffect(()=>{
		getUserProfileandRepos()
	},[getUserProfileandRepos])

	const onSearch = async (e, username)=>{
       e.preventDefault()

	   setLoading(true)
	   setRepos([])
	   setuserProf(null)

	 const {userProfile, repos} =   await getUserProfileandRepos(username)
	 setuserProf(userProfile)
	 setRepos(repos)
	 setLoading(false)
	}

	const onSort = (sortType) => {
		if(sortType === 'recent'){
			repos.sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))
		}else if(sortType === 'stars'){
			repos.sort((a,b) => b.stargazers_count - a.stargazers_count)
		}else if(sortType === 'forks'){
			repos.sort((a,b) => b.forks_count - a.forks_count)
		}
		setsortType(sortType)
		setRepos([...repos])
	}
  return (
    <div className='m-4'>
			<Search onSearch={onSearch} />
			{repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
			{userProfile && !loading &&	<ProfileInfo userProfile={userProfile} />}
			{repos.length > 0 && !loading && <Repos repos={repos} />}	
				{loading && 
				<Spinner /> }			
				</div>
		</div>
  )
}

export default HomePage