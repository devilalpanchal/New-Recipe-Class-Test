const AllImages = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.9
    }

]



function getContainer(arr, container) {
    let newData = arr.map((item) => {
        const {
            name,
            imageSrc,
            time,
            type,
            isLiked,
            rating,
        } = item

        return ` 
    <div class="full-image-container">    
      <img class="imageIn-javascript" src="${imageSrc}" alt="">
      <P class="type">${type}</P>
      <div class="name-like">
      <p class="name-food">${name}</p>
      <p> <i class="fa-solid fa-star" style="color: #FFD43B;"></i> ${rating}</p>
        
      </div>
      <div class="time-rate">
      <p class="time1">${time}</p>
      <p> <i class="fa-regular fa-heart"></i> <i class="fa-regular fa-comment"></i> ${isLiked}</p>
   </div>
       

    </div>
     `
    })

    container.innerHTML = newData.join('')

    if (arr.length <= 0) {
        return (container.innerHTML = `<h4>search Right  item not found</h4>`)
    }
}

window.addEventListener('DOMContentLoaded', getContainer(AllImages, Card1))


// to Search Engine to search Name

const btn = document.querySelector('.fa-brands')
const input = document.querySelector('.search-input')
console.log(btn)

btn.addEventListener('click', () => {
    let value = input.value.toLowerCase()
    console.log(value)
    let newArray = a.filter((item) =>
        item.name.toLowerCase().includes(value)
    )

    console.log(newArray)
    getContainer(newArray, tbody)
})

// When we press button of any alfabets after then comes this key in search input
input.addEventListener('keyup', () => {
    let value = input.value
    console.log(value)
    let newArray = AllImages.filter((item) =>
        item.name.toLowerCase().includes(value)
    )

    console.log(newArray)
    getContainer(newArray, Card1)

})

///////   to  vage food code /////////

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

btn1.addEventListener('click', () => {
        setTimeout(() => {
            document.location.reload();
          }, 10);
})

btn2.addEventListener('click', () => {

    let sortedArray = AllImages.sort((a, b) => {
        if (a.type > b.type) {
            return -1
        } else if (a.type < b.type) {
            return 0;
        }
    })
    console.log(sortedArray)
    getContainer(sortedArray, Card1)
})

///////   to non-vage food code /////////

btn3.addEventListener('click', () => {

    let sortedArray = AllImages.sort((a, b) => {
        if (a.type > b.type) {
            return 1
        } else if (a.type < b.type) {
            return -1
        }
    })
    console.log(sortedArray)
    getContainer(sortedArray, Card1)
})


