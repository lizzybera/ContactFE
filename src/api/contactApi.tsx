import axios from "axios"

// const URL : string = "http://localhost:1237/api"
const URL : string = "https://contactbe.onrender.com/api"

export const contact = async(data : any) =>{
    try {
        return await axios.post(`${URL}/contacts`, data).then((res : any) =>{
            return res.data.data
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const viewContact = async() =>{
    try {
        return await axios.get("https://contactbe.onrender.com/api/view-contacts",).then((res : any) =>{
            return res.data.data
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const searchContact = async(data : any) =>{
    try {
        return await axios.post("https://contactbe.onrender.com/api/search", data).then((res : any) =>{
            // return res.data.data
            console.log(typeof res)
            // console.log("res", res);
            
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteContact = async(contactID : any) =>{
    try {
        return await axios.delete(`https://contactbe.onrender.com/api/${contactID}/delete`).then((res : any) =>{
            return res.data.data         
            
        })
    } catch (error) {
        console.log(error);
        
    }
}
