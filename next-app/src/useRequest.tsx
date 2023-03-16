import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "https://localhost/api"

export const useGetSurveys = path => {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = baseUrl + path

  const { data: surveys, error } = useSWR(url, fetcher)

  return { surveys, error }
}

export const useCreateNewSurvey = path => {
    if (!path) {
        throw new Error("Path is required")
      }
    
      const url = baseUrl + path
    
      const { data: survey, error } = useSWR(url, fetcher)
    
      return { survey, error }
}