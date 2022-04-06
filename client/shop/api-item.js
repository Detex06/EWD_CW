const list = async (signal) => {
    try {
      let response = await fetch('/api', {
        method: 'GET',
        signal: signal,
      })
      console.log("API Product data recieved!")
      return await response.json()
    } catch(err) {
      console.log(err)
    }

  }

  export {
    list
  }
