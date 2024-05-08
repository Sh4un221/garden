export class Mydetails extends HTMLElement{
    static myCard
    details
    reportContainer 
    static query
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myDetails.css">
            <details>
                <summary>
                    <div class="details__description">Campus: </div>
                    <div class="details__container">
                        <p><marquee behavior="" direction="">6.Devuelve un listado con el nombre de todos los clientes españoles.</marquee></p>
                    </div>
                </summary>
                <div id="report__container" class="report__container">
                    <my-card></my-card> 
                </div>
            </details>
        `;
        Mydetails.myCard = this.shadowRoot.querySelector("my-card")
        this.details = this.shadowRoot.querySelector("details")
        Mydetails.reportContainer = this.shadowRoot.querySelector("#report__container")
    }

    sendAttributeMyCard(details){
        if(details.querySelector("#report__container").innerHTML)
            Mydetails.myCard.setAttribute("logic", Mydetails.query)
        
    }
    
    connectedCallback(){
        console.log(this.details.querySelector("#report__container"));
        this.details.addEventListener("click", this.sendAttributeMyCard(this.details))
    }
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        Mydetails.query = now
    }
}