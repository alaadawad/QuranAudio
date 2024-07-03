class player{
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if(screen.width<500){
            heightMain.style.width = screen.width + "px";
        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-300 + "px";
    }
}
onload=new player();
// class buttons
class Audio_Player{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play_pause");
        this.isplayed;
        this.play_pause_button .addEventListener("click", ()=>{
           this.play_pause();
        });
        
        this.names_radio=[];
        this.names_radio[0]="RADIO 1";
        this.names_radio[1]="RADIO 2";
        this.names_radio[2]="RADIO 3";
        this.names_radio[3]="RADIO 4";

        this.source_audio=[];
        this.source_audio[0]="ADS1.ogg";
        this.source_audio[1]="ADS2.ogg";
        this.source_audio[2]="ADS3.ogg";
        this.source_audio[3]="ADS4.ogg";
        this.server = 0;
        this.setResource();

        document.getElementById("next").addEventListener("click",()=>{
             if(this.server<this.source_audio.length-1){
                ++this.server;
                this.isplayed = false;
             }else{
                this.server=0;
             }
             localStorage.setItem("SAVE-POSITION",this.server);
             this.setResource();
        });
        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
            }else{
                this.server=this.source_audio.length-1;
            }
            localStorage.setItem("SAVE-POSITION",this.server);

            this.setResource();
        });
    }
    setResource(){
        if(localStorage.getItem("SAVE-POSITION")!=null){
            this.server= localStorage.getItem("SAVE-POSITION");

        }
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML =  this.names_radio[this.server];
        this.play_pause();
    }
    play_pause(){
         if(this.isplayed == false){
            this.play_pause_button.src = "pause.png";
            this.audio_file.play();
            this.isplayed=true;
         }else{
            this.play_pause_button.src = "play.png";
            this.audio_file.pause();
            this.isplayed=false;
         }
    }
}
onload=new Audio_Player();