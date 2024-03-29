const remoteURL = "http://localhost:5002"

export default {
        getAll(element) {
            return fetch(`${remoteURL}/${element}`)
            .then( e => e.json())
        },

        get(element,id) {
            return fetch(`${remoteURL}/${element}/${id}`)
            .then(e => e.json())
        },

        removeAndList(element, id) {
            return fetch(`${remoteURL}/${element}/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => {
                return this.getAll(element)
            })
        },

        post(newAnimal, element) {
            return fetch(`${remoteURL}/${element}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(newAnimal)
            }).then(data => data.json())
            .then(() => {
                return this.getAll(element)
            })
          },

          put(editedAnimal, element) {
            return fetch(`${remoteURL}/${element}/${editedAnimal.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(editedAnimal)
            }).then(data => data.json())
            .then(() => {
                return this.getAll(element)
            })
          }
}