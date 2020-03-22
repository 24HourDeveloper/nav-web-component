const template = document.createElement('template')
template.innerHTML = `
    <style>
        *{
            margin:0;
            padding:0
        }
        header{
            
        }
        .header-container{
            background-color: #eee;
            display:flex;
        }
        .wrapper{
            display:flex;
            margin: 0px 50px;
            width:100%
        }
        .logo{
            flex-grow:1;
            align-self:flex-end
        }
        nav{
            flex-grow:1;
            align-self:flex-end
        }
        .nav-bar{
            list-style-type: none;
            display:flex;
            
         }
         .li-links{
            flex-grow:1;
            text-align: center;
            font-size:20px;
         }
         .li-links:hover{
            background-color:#000
         }

         @media only screen and (max-width: 600px) {
            .header-container{
                display:block;
            }
            .wrapper{
                display:block;
                margin:0
            }
            .logo{
                margin-left:20px
            }
            .nav-bar{
                display:block
            }
            .li-links{
                padding:10px 0;
                border-bottom:.5px solid #eee
            }
          }
    </style>
    <header>
        <div class="header-container">
            <div class="wrapper">
                <div class="logo">
                    <h1></h1>
                </div>
                <nav>
                    <ul class="nav-bar">
                    </ul>
                </nav>
            </div>
        </div>
    </header>
`

class NavBar extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('logo')
        const links = this.shadowRoot.querySelector('ul')
        const linkText = this.getAttribute('links')
        const text = linkText.split(",")

        const header = this.shadowRoot.querySelector('.header-container')
        header.style.backgroundColor = this.getAttribute('bg-color')
        header.style.color = this.getAttribute('text')

        this.mapLinks(text, links)

    }

    mapLinks = (array, element) =>{
        array.map(item =>{
            const li = document.createElement('li')
            li.classList.add("li-links")
            element.appendChild(li).innerText = item
        })
    }
}

window.customElements.define("nav-bar", NavBar)