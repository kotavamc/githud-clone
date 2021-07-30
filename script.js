const textBox = document.getElementById('input-text')
const button = document.getElementById('search')

console.log(button);
button.addEventListener('click',()=>{
    const username = textBox.value
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}`
    xhr.open('GET', url)
    xhr.onreadystatechange= () =>{
        if(xhr.readyState==4 && xhr.status==200)
        {
            const userData = JSON.parse(xhr.responseText)
            const image = document.createElement('img')
            const id = document.createElement('h2')
            const organizations_url = document.createElement('h2')
            id.innerHTML = userData.id;
            organizations_url.innerHTML= userData.organizations_url;
            image.setAttribute('src', userData.avatar_url)
            console.log(image);
            const container = document.getElementById('image-container')
            container.appendChild(image)
            container.appendChild(id)
            container.appendChild(organizations_url)
        }
    }
    xhr.send()
})