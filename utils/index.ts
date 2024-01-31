import { FilterProps } from "@/types"

export async function fetchAllUsers(filters: FilterProps) {
  const { city, preferences } = filters

  let apiUrl = "http://localhost:5000/api/v1/users/allusers"

  // Om det finns filter, lägg till dem i URL:en
  const queryParams = new URLSearchParams()

  if (city) {
    queryParams.append("city", city)
    console.log("här kommer staden", city)
  }

  if (preferences) {
    queryParams.append("preferences", preferences)
    console.log("här kommer användarnamnet", preferences)
  }

  if (queryParams.toString()) {
    apiUrl += `?${queryParams.toString()}`
    console.log("här kommer apiUrl", apiUrl)
  }

  try {
    const response = await fetch(apiUrl, {
      cache: "no-cache",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.statusText}`)
    }

    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.log("Error när jag fetchar data:", error)
  }
}

export async function fetchCities() {
  const response = await fetch("http://localhost:5000/api/v1/users/cities", {
    cache: "no-cache",
  })

  const result = await response.json()
  console.log(result)
  return result
}

export async function fetchP() {
  const response = await fetch(
    "http://localhost:5000/api/v1/users/preferences",
    {
      cache: "no-cache",
    }
  )

  const result = await response.json()
  console.log(result)
  return result
}

export async function fetchAllUser() {
  const response = await fetch("http://localhost:5000/api/users/alluserinfo", {
    cache: "no-cache",
  })

  const result = await response.json()
  console.log(result)
  return result
}

export async function fetchUser(accessToken: string) {
  const response = await fetch("http://localhost:5000/api/users/currentuser", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-cache",
  })

  const result = await response.json()
  console.log(result)
  return result
}

export async function fetchUserTask(accessToken: string) {
  const response = await fetch("http://localhost:5000/api/tasks/mytasks", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-cache",
  })

  const result = await response.json()
  console.log(result)
  return result
}

export async function updateTask(accessToken: string) {
  const response = await fetch(
    "http://localhost:5000/api/tasks/updatetaskperformed",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
      cache: "no-cache",
    }
  )

  const result = await response.json()
  console.log(result)
  return result
}
