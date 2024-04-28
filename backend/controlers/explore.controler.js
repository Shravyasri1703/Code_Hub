export const explorePopularRepos = async (req, res) => {
    const { language } = req.params
    try{
        const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order&per_page=10`)
        const data = await response.json()
         res.status(200).json({
           repos: data.item
       })
     }
     catch(err){
       res.status(500).json({err: err.message})
     }
}