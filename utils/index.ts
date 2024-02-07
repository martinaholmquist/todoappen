export async function fetchAllUser(accessToken: string) {
  const response = await fetch("http://localhost:5000/api/admin/alluserinfo", {
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
  try {
    const response = await fetch("http://localhost:5000/api/tasks/mytasks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-cache",
    })

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`)
    }

    const text = await response.text()

    if (!text) {
      console.log("API returned an empty response.")
      return []
    }

    const result = JSON.parse(text)

    console.log(result)
    return result
  } catch (error) {
    console.error("Error fetching user tasks:", error)
    throw error
  }
}
