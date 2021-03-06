export const fetchJobs = () => {
    return(dispatch) => { 
        return fetch('http://127.0.0.1:3000/jobs')
        .then(resp => resp.json())
        .then(jobs => dispatch({type: 'FETCH_JOBS', payload: jobs}))
        
    }
    
}

export const addJob = (job) => {
    return(dispatch) => (
        fetch('http://127.0.0.1:3000/jobs', {
            method: 'POST',
            body: JSON.stringify(job),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(job => dispatch({type: 'ADD_JOB', payload: job}))
    )
}

export const deleteJob = (job) => {
    return dispatch => {
        fetch(`http://localhost:3000/jobs/${job.id}` , {
            method: 'DELETE' })
            .then(job => { dispatch({ type: "DELETE_JOB", payload: job })
        })
    }
}