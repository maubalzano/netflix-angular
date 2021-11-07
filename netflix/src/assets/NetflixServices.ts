export interface NFService {
    text: {
        title: string,
        description: string
    },
    graphic: {
        img: {
            imgUrl: string,
            style: string
        },
        animationStyle?: string,
        animationHTML?: string
    }
}

export const NFServices: NFService[] = [
    {
        text: {
            title: "Goditi Netflix sulla tua TV.",
            description: "Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi."
        },
        graphic: {
            img: 
            {
                imgUrl: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
                style: "z-index:2;position:relative"
            },
            animationStyle: "max-width: 73%;max-height: 54%;position: absolute;top: 46%;left: 50%;transform: translate(-50%,-50%);z-index:1",
            animationHTML: "<video muted autoplay loop src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' style=''></video>"
            
        }
    },
    {
        text: {
            title: "Scarica le tue serie da guardare offline.",
            description: "Salva facilmente i tuoi preferiti così avrai sempre qualcosa da guardare."
        },
        graphic: {
            img: 
            {
                imgUrl: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
                style: "z-index:-1;position:relative"
            },
            animationStyle: "padding:5px;border: 2px solid rgba(255,255,255,.25);border-radius: 0.75em;box-shadow: 0 0 2em 0 #000;position: absolute;left: 50%;bottom: 8%;background:#000;display: flex;flex-direction:row;align-items: center;width: 55%;min-width: 15em;transform: translateX(-50%)",
            animationHTML: `<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" width="58px"/><span class="p-3 d-flex flex-column"><div class="text-white">Stranger Things</div><div class="text-primary">Download in corso...</div></span><img width="48px"src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif">`
            
        }
    },
    {
        text: {
            title:'Guarda Netflix ovunque.',
            description: 'Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti e senza spendere di più.'
        },
        graphic: {
            img:
            {
                imgUrl: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
                style: "z-index:1;position:relative"
            },
            animationStyle:"width: 100%;height: 100%;max-width: 63%;max-height: 47%;position: absolute;top: 34%;left: 50%;transform: translate(-50%,-50%);" ,
            animationHTML: "<video muted autoplay loop width='100%'src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'></video>"
        } 
    },
    {
        text: {
            title: 'Crea profili per i bambini.',
            description: 'I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.'
        },
        graphic: {
            img: {
                imgUrl: "https://occ-0-2725-2582.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbh8I7sjWYNz2f8_bqyLdqQqR5AfT7VDHCKvURfq4-D-a7r0fnLYR01-_teQH4fX1NctSxg5EVZ_cX0tjuzKbmdUvLab.png?r=dda",
                style: ""
            }
        }
    }
]