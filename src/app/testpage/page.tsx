'use client'

async function getData() {
  console.log('it worked')
    // fetch('http://127.0.0.1:7777/api#/mods/ModsController_findAll')
    // .then((response) => {
    //   return console.log(response.json());
    // })
    // .then((data) => {
    //   console.log(data);
    // });
   
    // return res.json()
  }

async function handleClick() {
    const xhr = new XMLHttpRequest();
    const url = "http://127.0.0.1:7777/api#/mods/ModsController_findAll";

    xhr.open("GET", url);
    xhr.onreadystatechange = () => {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        console.log(xhr.responseText);
        console.log('worked')
      } else {
        console.log('didnt work')
      }
    }
  };
  xhr.send();
    // const data = await typeof(getData())a
}

export default function TestPage(){
    return(
        <div>
            <button onClick={handleClick}>press to test</button>
        </div>
    )
}