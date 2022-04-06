const list = async (signal) => {
    try {
      let response = await fetch('/api/items/', {
        method: 'GET',
        signal: signal,
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }