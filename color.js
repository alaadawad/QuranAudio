class Color{
    constructor(){
        this.Color1 = document.getElementById("color1");
        this.Color1.addEventListener("click",()=>{
            this.select_color("color1");
        });

        this.Color2 = document.getElementById("color2");
        this.Color2.addEventListener("click",()=>{
            this.select_color("color2");
        });

        this.Color3 = document.getElementById("color3");
        this.Color3.addEventListener("click",()=>{
            this.select_color("color3");
        });

        this.Color4 = document.getElementById("color4");
        this.Color4.addEventListener("click",()=>{
            this.select_color("color4");
        });
        if(localStorage.setItem("COLOR")==null){
            document.body.style.background="rgba(39,39,37,1)";
        }
        this.select_color(localStorage.setItem("COLOR"));
    }
    select_color(color){
        if(color == "color1"){
            document.body.style.background="rgba(39,39,37,1)";
        }

        if(color == "color2"){
            document.body.style.background="linear-gradient(to right,#ff9966,#ff5e62)";
        }

        if(color == "color3"){
            document.body.style.background="rgba(243,81,81)";
        }

        if(color == "color4"){
            document.body.style.background="rgba(61,141,210)";
        }
        localStorage.setItem("COLOR",color);
    }
}
onload = new Color();