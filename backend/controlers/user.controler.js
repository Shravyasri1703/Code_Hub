export const getUserProfileAndRepos = async (req, res) => {
     
    const { username } = req.params
    
    try{
    const userRes = await fetch(`https://api.github.com/users/${username}`)
    const userProfile = await userRes.json()
    const repoRes = await fetch(userProfile.repos_url)
    const repos = await repoRes.json() 

    res.status(200).json({ userProfile, repos })
    }
    catch(err){
        res.status(500).json({err: err.message})
    }
  

}