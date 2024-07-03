class volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.volume = 50/100;

        this.volume_range = document.getElementById("volume_range");
        this.volume_range.addEventListener("change",()=>{
            this.audio_file.volume= this.volume_range.value/100;
        });

        this.volume_speed = document.getElementById("volume_speed");
        this.volume_speed.playbackRate = 1;
        this.volume_speed.addEventListener("change",()=>{
            this.audio_file.playbackRate = this.volume_speed.value / 100;
        });
    }
}
onload=new volume();