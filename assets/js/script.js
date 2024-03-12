async function getPosts() {
    const container = document.getElementById("post-data");
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error(`Error al obtener los posts. Código de estado: ${response.status}`);
      }
  
      const data = await response.json();
      
      const postsHtml = data
        .map(post => `
          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
            </div>
          </div>
        `)
        .join("");
  
      container.innerHTML = postsHtml;
    } catch (error) {
      console.error(error.message);
    }
  }