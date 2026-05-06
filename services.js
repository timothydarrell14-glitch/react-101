const BASE_URL = "http://localhost:3000/"

export const usersData = async () => {
    try{
        let response = await fetch(`${BASE_URL}users`)

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data

    }catch(error){
        console.Error("Error fetching user data:", error)
    }
    
}

export const postsData = async () => {
    try{
        let response = await fetch (`${BASE_URL}posts`)

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        return data

    }catch(error){
        console.Error("Error fetching user data:", error)
    }
}

export const addName = async (newName) => {
    try{
        const response = await fetch(`${BASE_URL}users`, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(newName)
        })

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data

    }catch(error){
        console.Error("Error posting name", error)
    }
}