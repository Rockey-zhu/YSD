import axios from "axios"

const server = axios.create({
    baseURL:"https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf"
})

export const getAPIList = () => server.get(``).then(res => {
    console.log(res)
    return res.data.data;
})
    
