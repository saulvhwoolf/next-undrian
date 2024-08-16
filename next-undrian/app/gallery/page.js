import Gallery from "@/components/Gallery";

export default function GalleryPage() {
    const galleryData = {
        "artist": {
            "name": "Tim Van Hook",
            "bio": "I had a major stroke when I was 62 in 2014. With therapy, I learned to\nwalk and talk again, but remain unable to use my right (dominant) hand and\narm. Before the stroke I had written poems and stories, and in 2015-6 I\ntried writing again, some of which is in the Writing folder. I had another\nstroke in 2017 and we moved cross country to live with our son Sam. In the\npast I had built furniture and sculpture, and, although I hadn't used the tools\nsince my major stroke, I had them moved as well. Sam set up a workshop\nin our shared house, and, with his help, I decided to see what I could make\none handed."
        },
        "series": [
            {
                "seriesId": 1,
                "name": "Plato's Cave",
                "count": 25,
                "order": -274,
                "description": "",
                "previewImages": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-296_media_cabinet.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-294_endtables.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-292_cav_hall_seat.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-290_stools.jpg"
                ],
                "firstArtworkId": 1,
                "lastArtworkId": 25,
                "lastSeriesId": null,
                "nextSeriesId": 2
            },
            {
                "seriesId": 2,
                "name": "Build Dwell Think",
                "count": 12,
                "order": -211,
                "description": "",
                "previewImages": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-220_renunciation.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-218_ladder.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-216_dormer.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-214_proscenium.jpg"
                ],
                "firstArtworkId": 26,
                "lastArtworkId": 37,
                "lastSeriesId": 1,
                "nextSeriesId": 3
            },
            {
                "seriesId": 3,
                "name": "The Secret Miracle",
                "count": 12,
                "order": -161,
                "description": 0,
                "previewImages": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-170_ephphatha.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-168_ichthyx.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-166_eucharis.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-164_lazarus.jpg"
                ],
                "firstArtworkId": 38,
                "lastArtworkId": 49,
                "lastSeriesId": 2,
                "nextSeriesId": 4
            },
            {
                "seriesId": 4,
                "name": "The Penal Colony",
                "count": 12,
                "order": -111,
                "description": "",
                "previewImages": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-120_aqedah.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-118_dagon_inside.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-116_vulning.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-114_penuel_low.jpg"
                ],
                "firstArtworkId": 50,
                "lastArtworkId": 61,
                "lastSeriesId": 3,
                "nextSeriesId": 5
            },
            {
                "seriesId": 5,
                "name": "Stations",
                "count": 14,
                "order": -63,
                "description": "",
                "previewImages": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-74_case_opening.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-72_flask_opening_2.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-70_trap_front_side.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-68_locket_side_view.jpg"
                ],
                "firstArtworkId": 62,
                "lastArtworkId": 75,
                "lastSeriesId": 4,
                "nextSeriesId": 6
            },
            {
                "seriesId": 6,
                "name": "Mechanism",
                "count": 9,
                "order": -18,
                "description": "1. an assembly of moving parts performing a complete functional motion, often being part of a large machine; linkage. [...]\n\n8. the theory that everything in the universe is produced by matter in motion; materialism.[...]\n\n10. Psychoanal. the habitual operation and interaction of psychological forces within an individual that assist in interpreting or dealing with the physical or psychological environment.\n\n           Random House Unabridged Dictionary, Copyright © 1997, by Random House, Inc",
                "previewImages": [
                    "http://undrian.com/mech_index_files/sleep.jpg",
                    "http://undrian.com/mech_index_files/wash.jpg",
                    "http://undrian.com/mech_index_files/work%20close.jpg",
                    "http://undrian.com/mech_index_files/drink.jpg"
                ],
                "firstArtworkId": 76,
                "lastArtworkId": 84,
                "lastSeriesId": 5,
                "nextSeriesId": 7
            },
            {
                "seriesId": 7,
                "name": "Break",
                "count": 6,
                "order": -3.5,
                "description": "This series breaks the endless repetitions of the Mechanism series with an abrupt discontinuity.\n\nThe short, roughly 60 second, movies are like infomercial breaks for death.\n\nThe five breaks feature the agents of death: other, self, body, error, and nature,\n\npowered by the elements time, earth, air, water, and fire.",
                "previewImages": [
                    "http://undrian.com/break_index_files/sandman.jpg",
                    "http://undrian.com/break_index_files/altamont.jpg",
                    "http://undrian.com/break_index_files/house%202.jpg",
                    "http://undrian.com/break_index_files/san%20adreas.jpg"
                ],
                "firstArtworkId": 85,
                "lastArtworkId": 90,
                "lastSeriesId": 6,
                "nextSeriesId": 8
            },
            {
                "seriesId": 8,
                "name": "New Work",
                "count": 95,
                "order": 109.01052631578948,
                "description": "I had a major stroke when I was 62 in 2014. With therapy, I learned to\nwalk and talk again, but remain unable to use my right (dominant) hand and\narm. Before the stroke I had written poems and stories, and in 2015-6 I\ntried writing again, some of which is available here: \n\nhttps://drive.google.com/drive/folders/1CibmUACFm_cU2MM5CzODQLVT6SQktcUX\n\nI had another stroke in 2017 and we moved cross country to live with our son \nSam. In the past I had built furniture and sculpture, and, although I hadn’t \nused the tools since my major stroke, I had them moved as well. Sam set up \na workshop in our shared house, and, with his help, I decided to see what I \ncould make one handed.",
                "previewImages": [
                    "https://storage.googleapis.com/undrian-artwork-hub/02%20coat%20rack.JPG",
                    "https://storage.googleapis.com/undrian-artwork-hub/03%20contracture.jpeg",
                    "https://storage.googleapis.com/undrian-artwork-hub/04%20stand-up.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/05%20tympod.JPG"
                ],
                "firstArtworkId": 91,
                "lastArtworkId": 185,
                "lastSeriesId": 7,
                "nextSeriesId": null
            }
        ],
        "pieces": [
            {
                "order": -298,
                "id": "cav_dining",
                "name": "Dining Set",
                "date": {
                    "year": 2002
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "Plato's Cave",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-298_diningroom.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-298_diningroom.jpg"
                ],
                "artworkId": 1,
                "lastArtworkId": null,
                "nextArtworkId": 2
            },
            {
                "order": -296,
                "id": "cav_media_cabinet",
                "name": "Media cabinet",
                "date": {
                    "year": 2002
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "alder and walnut, 67\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-296_media_cabinet.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-296_media_cabinet.jpg"
                ],
                "artworkId": 2,
                "lastArtworkId": 1,
                "nextArtworkId": 3
            },
            {
                "order": -294,
                "id": "cav_end_tables",
                "name": "End tables",
                "date": {
                    "year": 2002
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "birch and walnut, each 24\"",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-294_endtables.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-294_endtables.jpg"
                ],
                "artworkId": 3,
                "lastArtworkId": 2,
                "nextArtworkId": 4
            },
            {
                "order": -292,
                "id": "cav_hall_seat",
                "name": "Hall seat",
                "date": {
                    "year": 2002
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "sweetgum, 80\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-292_cav_hall_seat.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-292_cav_hall_seat.jpg"
                ],
                "artworkId": 4,
                "lastArtworkId": 3,
                "nextArtworkId": 5
            },
            {
                "order": -290,
                "id": "cav_stools",
                "name": "Stools",
                "date": {
                    "year": 2002
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "maple and walnut, 34\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-290_stools.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-290_stools.jpg"
                ],
                "artworkId": 5,
                "lastArtworkId": 4,
                "nextArtworkId": 6
            },
            {
                "order": -288,
                "id": "cav_dictionary_stand",
                "name": "Dictionary stand",
                "date": {
                    "year": 2002
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "mixed media, 70\"",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-288_dictionary%20stand.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-288_dictionary%20stand.jpg"
                ],
                "artworkId": 6,
                "lastArtworkId": 5,
                "nextArtworkId": 7
            },
            {
                "order": -286,
                "id": "cav_caryatable",
                "name": "Caryatable",
                "date": {
                    "year": 2003
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "walnut, 38\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-286_caryatable.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-286_caryatable.jpg"
                ],
                "artworkId": 7,
                "lastArtworkId": 6,
                "nextArtworkId": 8
            },
            {
                "order": -284,
                "id": "cav_arck",
                "name": "Arck",
                "date": {
                    "year": 2003
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "Brazilian alder, 60\"",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-284_arck.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-284_arck.jpg"
                ],
                "artworkId": 8,
                "lastArtworkId": 7,
                "nextArtworkId": 9
            },
            {
                "order": -282,
                "id": "cav_lovehateseat",
                "name": "LoveHateSeat",
                "date": {
                    "year": 2003
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "walnut and white mahogany, 36\"",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-282_lovehateseat.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-282_lovehateseat.jpg"
                ],
                "artworkId": 9,
                "lastArtworkId": 8,
                "nextArtworkId": 10
            },
            {
                "order": -280,
                "id": "cav_shelflife",
                "name": "ShelfLife",
                "date": {
                    "year": 2003
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "walnut mahogany and alder, 68\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-280_shelflife.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-280_shelflife.jpg"
                ],
                "artworkId": 10,
                "lastArtworkId": 9,
                "nextArtworkId": 11
            },
            {
                "order": -278,
                "id": "cav_sextus",
                "name": "Coniunctio Sextus",
                "date": {
                    "year": 2004
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "mixed hardwoods and silk, 50x50\" table",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-278_coniunctio_1.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-278_coniunctio_1.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-278_coniunctio_2.jpg"
                ],
                "artworkId": 11,
                "lastArtworkId": 10,
                "nextArtworkId": 12
            },
            {
                "order": -276,
                "id": "cav_lovehatedeath",
                "name": "LoveHateDeath",
                "date": {
                    "year": 2005
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "poplar, 16\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-276_lovehatedeath.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-276_lovehatedeath.jpg"
                ],
                "artworkId": 12,
                "lastArtworkId": 11,
                "nextArtworkId": 13
            },
            {
                "order": -274,
                "id": "cav_godlet",
                "name": "Fertility Godlet",
                "date": {
                    "year": 2004
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "ceramic, 8\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-274_cav_godlet.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-274_cav_godlet.jpg"
                ],
                "artworkId": 13,
                "lastArtworkId": 12,
                "nextArtworkId": 14
            },
            {
                "order": -272,
                "id": "cav_venux_of_atherton",
                "name": "Venus of Atherton",
                "date": {
                    "year": 2005
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "mixed media, 8\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-272_venus_lamp.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-272_venus_lamp.jpg"
                ],
                "artworkId": 14,
                "lastArtworkId": 13,
                "nextArtworkId": 15
            },
            {
                "order": -270,
                "id": "cav_five",
                "name": "Five by Five",
                "date": {
                    "year": 2006
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "poplar, 16\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-270_fivebyfive.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-270_fivebyfive.jpg"
                ],
                "artworkId": 15,
                "lastArtworkId": 14,
                "nextArtworkId": 16
            },
            {
                "order": -268,
                "id": "cav_hannukiah",
                "name": "Hannukiah",
                "date": {
                    "year": 2004
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "steel, 7\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-268_hanukiah.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-268_hanukiah.jpg"
                ],
                "artworkId": 16,
                "lastArtworkId": 15,
                "nextArtworkId": 17
            },
            {
                "order": -266,
                "id": "cav_five",
                "name": "Daily Planet",
                "date": {
                    "year": 2005
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "poplar, 12\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-266_dailyplanet.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-266_dailyplanet.jpg"
                ],
                "artworkId": 17,
                "lastArtworkId": 16,
                "nextArtworkId": 18
            },
            {
                "order": -264,
                "id": "cav_weekly_lamp",
                "name": "Weekly Lamp",
                "date": {
                    "year": 2006
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "mixed media, 27\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-264_weekly_lamp.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-264_weekly_lamp.jpg"
                ],
                "artworkId": 18,
                "lastArtworkId": 17,
                "nextArtworkId": 19
            },
            {
                "order": -262,
                "id": "cav_alchemy_box",
                "name": "Alchemy Box",
                "date": {
                    "year": 2004
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "mixed_hardwoods, 5\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-262_alchemy_box.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-262_alchemy_box.jpg"
                ],
                "artworkId": 19,
                "lastArtworkId": 18,
                "nextArtworkId": 20
            },
            {
                "order": -260,
                "id": "cav_pronk",
                "name": "Pronk",
                "date": {
                    "year": 2007
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "mixed_hardwoods, 5\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-260_pronk.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-260_pronk.jpg"
                ],
                "artworkId": 20,
                "lastArtworkId": 19,
                "nextArtworkId": 21
            },
            {
                "order": -258,
                "id": "cav_kyleagraphy",
                "name": "Kyleagraphy",
                "date": {
                    "year": 2007
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "walnut and mahogany, 38\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-258_kyleagraphy.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-258_kyleagraphy.jpg"
                ],
                "artworkId": 21,
                "lastArtworkId": 20,
                "nextArtworkId": 22
            },
            {
                "order": -256,
                "id": "cav_unfolding_chair",
                "name": "Unfolding Chair",
                "date": {
                    "year": 2005
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "mixed media, 40\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-256_unfolding_chair.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-256_unfolding_chair.jpg"
                ],
                "artworkId": 22,
                "lastArtworkId": 21,
                "nextArtworkId": 23
            },
            {
                "order": -254,
                "id": "cav_undrian",
                "name": "Undrian (red and blue chair)",
                "date": {
                    "year": 2008
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "walnut and mahogany, 38\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-254_undrian.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-254_undrian.jpg"
                ],
                "artworkId": 23,
                "lastArtworkId": 22,
                "nextArtworkId": 24
            },
            {
                "order": -252,
                "id": "cav_diletto",
                "name": "Diletto (headboard)",
                "date": {
                    "year": 2008
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "maple, 48\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-252_cav_diletto.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-252_cav_diletto.jpg",
                    "http://undrian.com/cav_saulito_files/shapeimage_5.png"
                ],
                "artworkId": 24,
                "lastArtworkId": 23,
                "nextArtworkId": 25
            },
            {
                "order": -250,
                "id": "cav_saulito",
                "name": "Saulito",
                "date": {
                    "year": 2008
                },
                "series": "Plato's Cave",
                "seriesId": 1,
                "description": "maple and beech, 48\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-250_cav_saulito.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-250_cav_saulito.jpg"
                ],
                "artworkId": 25,
                "lastArtworkId": 24,
                "nextArtworkId": null
            },
            {
                "order": -222,
                "id": "bdt_trinity",
                "name": "Trinity",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "He spit in the mud to anoint their eyes,\n\nMade them deaf and blind to their children’s cries.\n\nWorship the Sabbath where people can see\n\nThe way we suffer is god’s mystery.\n\n\n\nMama and daddy said they’d pray for me,\n\nSent to the temple of the trinity.\n\nHe took my brother and sister away.\n\nI hope to join them someday.\n\n\n\nI work in the earth so it sets me free\n\nTo make a new boy who may redeem me,\n\nBut the foolish man builds his house on the sand.\n\nThe flood wipes away all the sins of his hand.\n\n\nMama and daddy said they’d pray for me,\n\nLocked in the prison of our family.\n\nHe keeps the others to stand by his throne.\n\nI know I’ll never go home.\n\n\n\nHe formed in the dust the first woman and man,\n\nWho ate from the tree to be cast out and damned.\n\nHe saves the babies unblemished and pure,\n\nBut I kneel condemned without a savior.\n\n\n\nMama and daddy said they’d pray for me,\n\nBound in the body of this misery.\n\nHe holds his lovers in heaven on high.\n\nI’ll go to hell when I die.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-222_trinity.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-222_trinity.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/trinity-song",
                "artworkId": 26,
                "lastArtworkId": null,
                "nextArtworkId": 27
            },
            {
                "order": -220,
                "id": "bdt_renunciation",
                "name": "Renunciation",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "They raised him right in the skinny box muted and seen,\n\nAttacks that embalmed his sacred heart, bleating and bled,\n\nDouble Dutch lines rule his life in the living machine,\n\nEntombed within calvinized steel is as good as dead.\n\n\n\nPure hues, black and white, no shades of grey to tempt the monk.\n\nChacmool slouches toward chambers too rigid to be born.\n\nInside clean and true grids trespassed by the hunkypunk,\n\nThe curse of the blest yellow maiden he bears alone.\n\n\n\nA man who dwells in glass houses can’t hide from his fate.\n\nHis stress tests the wall but it moves no more than before.\n\nHe looks up from his carcass at silent birds who wait.\n\nPerhaps redemption came knocking but could find no door.\n\n\n\nHe clicks his remote control, does not renunciate\n\nDoctor, an angel, kneels and does not resuscitate.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-220_renunciation.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-220_renunciation.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/renunciation",
                "artworkId": 27,
                "lastArtworkId": 26,
                "nextArtworkId": 28
            },
            {
                "order": -218,
                "id": "bdt_ladder",
                "name": "Ladder",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "Beyond the son one dry yellow portal\n\nsends souls to moments as mortals,\n\nordained round again out of time, amen,\n\nright hand lifts up and left condemns.\n\nAs it is above it is below.\n\n\n\nNot yet he or she, not dead but sleep walk\n\na flight of cool stone soft foot falls,\n\ndecline out of step, shrink and grow to turn\n\nback for ever more dying born.\n\nAs it is enough it is unknown.\n\n\n\nWet red room in flesh holds every present.\n\nHope springs but despair's in descent.\n\nOld scarred chamber walls close in to gasp last.\n\nA door shuts out what came to pass.\n\nAs it is beloved it is alone.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-218_ladder.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-218_ladder.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/ladder-song",
                "artworkId": 28,
                "lastArtworkId": 27,
                "nextArtworkId": 29
            },
            {
                "order": -216,
                "id": "bdt_dormer",
                "name": "Dormer",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "In the crawl space hides a boy who can’t let a word be heard.\n\nThe hills tonight are waiting, but all his friends went home.\n\nA black robed man beats at the door and the heart rings hollow.\n\nThey built his own room, up stairs in the eave where he sits dormant.\n\n\n\nThey keep stuff there they seldom need but don’t want to discard.\n\nThe trash in ponds is sinking, junk cars rest on dirt roads.\n\nHe brings the book of life and death by which he lives below.\n\nProcrustean bed for clown, dunce, heretic measures his torment.\n\n\n\nHe discovers his gifts they pushed way back down in the dark.\n\nSpider threads snag him sleeping until he starts alone.\n\nKnock, knock. Who’s there? It’s your savior. Your savior who you know.\n\nHe sees everything, “forgive us our sins” is his informant.\n\n\n\nHate your mother and your father, leave all this and follow.\n\nPulled from the corner a dead scar thickens against the doorman.\n\nTime stops its tripping, the child remembered lasts not a moment",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-216_dormer.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-216_dormer.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/dormer",
                "artworkId": 29,
                "lastArtworkId": 28,
                "nextArtworkId": 30
            },
            {
                "order": -214,
                "id": "bdt_proscenium",
                "name": "Proscenium",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "There once was a boy tall and fair.\n\n“Young man, sit up straight in your chair.\n\nWhile you’re here in school you follow the rule.\n\nSpeak up, or you’re going nowhere.”\n\nPlease leave him alone. Don’t leave him alone.\n\nLeave him a stick and a stone.\n\n\n\n“Young man, bow your head, close your eyes.\n\nGive thanks for his great sacrifice.”\n\nHe kneels in the church, it makes his knees hurt.\n\nHe wonders how long till he dies.\n\nPlease leave him alone. Don’t leave him alone.\n\nLeave him in fear on his own.\n\n\n\n“Young man, don’t pretend you’re asleep.\n\nI know all the secrets you keep.\n\nI’ll wash this tonight. I’ll turn out your light.\n\nSay ‘Oh, good shepherd, tend your sheep.’ ”\n\nPlease leave him alone. Don’t leave him at home.\n\nLeave him to reap what you’ve sown.\n\n\n\n“Young man, look at me when I talk.\n\nThe holy ones will not be mocked.”\n\nUp grandfather’s stairs no one hears his prayers.\n\nHe waits for the tock of the clock.\n\nPlease leave him alone. Don’t leave him alone.\n\nLeave him hollowed when he’s grown.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-214_proscenium.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-214_proscenium.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/proscenium",
                "artworkId": 30,
                "lastArtworkId": 29,
                "nextArtworkId": 31
            },
            {
                "order": -212,
                "id": "bdt_shroud",
                "name": "Shroud",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "Here he is on the rock that they call Golgotha.\n\nFurl the flag, shake the shroud, cinch the chain.\n\nLet the great speckled bird take his heart soon enough.\n\nBut he’ll never go back again.\n\n\n\nWhy do you talk like you’ve got a mouth full of rocks,\n\nLying there in the dirt like a worm?\n\nSee, I’ll sit on your chest till you tell me to stop.\n\nBut he’ll never talk back again.\n\n\n\nIs your head made of rock? Will you get out of here?\n\nSilly boy, I can’t be your girlfriend,\n\nCause you’re dumb and yellow, and you act kind of queer.\n\nBut he’ll never turn back again.\n\n\n\nHe looks up at the stars in the wings of the night.\n\nOn warm rocks pebbles poke on his skin.\n\nHe waits for a good book to take him to the light,\n\nAnd he’ll never come back again.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-214_proscenium.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-214_proscenium.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/golgotha",
                "artworkId": 31,
                "lastArtworkId": 30,
                "nextArtworkId": 32
            },
            {
                "order": -210,
                "id": "bdt_travel",
                "name": "Travel",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "The sun climbs and sinks\n\nAs the moon grows and shrinks\n\nAnd the light of day dims\n\nTill the night never ends.\n\nFeel the pulse beat and still,\n\nSee the chest fall and fill,\n\nAs the eyes open up\n\nAnd then shut.\n\nGo round the years.\n\nGo round the spiral of stars.\n\n\n\nHe goes back in time\n\nWhere he finds him a child\n\nWho has grown to become\n\nThe old man who returns.\n\nSo the boy craves the youth\n\nWho then clings to the man\n\nWhile he saves what he can\n\nFrom the truth.\n\nGo round again.\n\nGo round a world without end.\n\n\n\nAll suffer alive,\n\nFor they suffer desire,\n\nBut desire can’t attach\n\nTo what walks on the path.\n\nThere’s no right for the wrong\n\nBut kindness undoes harm\n\nSo the toll is forgone\n\nNot reborn.\n\nGo round to be.\n\nGo round before memory.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-210_travel.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-210_travel.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/travel",
                "artworkId": 32,
                "lastArtworkId": 31,
                "nextArtworkId": 33
            },
            {
                "order": -208,
                "id": "bdt_miller",
                "name": "Miller",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "When Doctor Miller cut the melanoma,\n\nHer scalpel sliced away a football,\n\nVesica picsis or a cheap patch, a Dutchman,\n\nAs finger grafts conceal stigmata.\n\n\n\nCross your bow the flying Dutchman won’t go home,\n\nHungry ghost damned to float on the flood.\n\nThe Dutch boy standing stiff like a moon on the dam\n\nCan’t hold in rising tide pumping blood.\n\n\n\nQuixote on a quest tilting at windmills,\n\nRomans thrust in the spear of destiny.\n\nSpinning arms of the cross send his head over heels.\n\nLevees fail and he walks on the sea.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-208_miller.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-208_miller.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/miller",
                "artworkId": 33,
                "lastArtworkId": 32,
                "nextArtworkId": 34
            },
            {
                "order": -206,
                "id": "bdt_corner",
                "name": "Corner",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "At the counter in the Cozy\n\nCorner Sweet Shop tough guys order\n\ncherry coke.\n\nOn the sidewalk, what a retard,\n\nmarbles talk when frozen hard he\n\nmakes you choke.\n\nIn the doorway by the Playboys\n\npinball girl waits with no idea\n\nwhat you hope.\n\nCement pressure straightens your ribs,\n\njackets your arms, can’t remember\n\nwhen you broke.\n\nBig kids ball game, no one gets it,\n\ndown the storm drain, reach for what’s stuck\n\nin the throat.\n\nEasy vendor, in the store won’t\n\ndare the name for box of Marbro’s\n\nthat you smoke.\n\nTune to lyrics of the gutter,\n\nwords your father’d wash the Bible\n\nclean as soap.\n\nTime you turn on losers, loners,\n\nmock them, push them, blind sweet rushing\n\npower woke.\n\nSteal the album, poke the faggot,\n\nkick the door in, crazy, let in\n\non the joke.\n\nIn the backseat, wine and reefer,\n\nfreakin’ funny how you ask for\n\nnother toke.\n\nWasted, too late, kill the bottle\n\nlens of streetlight, toss the empty\n\ndown the slope.\n\nWipe out the bike, OD on smack,\n\nshot up or knifed, blow off the wake,\n\nsomeone spoke.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-206_corner.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-206_corner.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/corner",
                "artworkId": 34,
                "lastArtworkId": 33,
                "nextArtworkId": 35
            },
            {
                "order": -204,
                "id": "bdt_cleft",
                "name": "Cleft",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "Got a hard candy stuck blue in his throat.\n\nGrab him by the legs, shake that demon out.\n\nRun out of the house and climb up the cliff\n\nThat dangles the boy and says make a wish.\n\nHe’ll break from her grip but not abandon\n\nThe spire inside stacked like a totem.\n\n\n\nThe mountain’s old man won’t stir from his snooze.\n\nWives cleave to husbands, not the child they lose\n\nWho’s caught on the rock between the hard face,\n\nRaised high by the heels and dipped in grey grace.\n\nDredge up the lizard wedged in a crevice.\n\nTurn tail to worship the church of abyss.\n\n\n\nCan’t say so won’t say the vow of the cold,\n\nHard, wet and hungry hole’s ace beats the fold.\n\nFull grown to hold stone that used to pound fear,\n\nHis prayer’s solitaire works in the beast’s lair.\n\nHis fat hibernates and waits for no thaw,\n\nLooks out from the maw for the saint’s arrows.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-204_cleft.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-204_cleft.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/cleft",
                "artworkId": 35,
                "lastArtworkId": 34,
                "nextArtworkId": 36
            },
            {
                "order": -202,
                "id": "bdt_camp",
                "name": "Camp",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "In the morning we walk to the chapel.\n\nIn the evening we go to the concert.\n\nWhen the bell rings, we hurry to supper,\n\nBless the bug juice that we are served.\n\nIn the woods, an empty A frame,\n\nShe can’t cook like it is in heaven.\n\nIn the craft shop carve and paint a totem,\n\nHalf a world from the camp of Christ.\n\n\n\nCircle tentels against what is pleasant.\n\nName them after twelve lost Indian tribes\n\nWho were killed off, converted or exiled,\n\nAdam’s heirs but not the chosen.\n\nIn the woods, the sinless boys ran,\n\nTrumpets sound the songs of last judgment.\n\nWorn by the beast, the crown of the bone man\n\nAdorned by the angel of death.\n\n\n\nWork his fifty for two weeks in July.\n\nWork his fifty for a score till he dies.\n\nWash in the lake. The soap floats at his waist.\n\nFind the bathroom behind black trees.\n\nIn the woods with reservations,\n\nHe’s waiting for a resurrection,\n\nShut in at night by the double Dutch doors\n\nWithout a breath of heaven’s breast.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-202_camp_right.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-202_camp_right.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/camp",
                "artworkId": 36,
                "lastArtworkId": 35,
                "nextArtworkId": 37
            },
            {
                "order": -200,
                "id": "bdt_garage",
                "name": "Garage",
                "date": {
                    "year": 2010
                },
                "series": "Build Dwell Think",
                "seriesId": 2,
                "body": "Where the dirt road narrows there’s an old garage\n\nFull of trash, with a pit open in the floor,\n\nEmpty cans, cigarettes, Hustlers in garbage,\n\nTill the night a fiery furnace fills the door.\n\n\n\nThe beast cannot say anything,\n\nAnd the bone man with no eyes hears you swing,\n\nAnd your grandpa preaches, “Wait for the king,”\n\nAnd the Buddha winks and jokes, “Do not cling”.\n\n\n\nWould you like to climb up and hang on a rope,\n\nAt the roof of the gym where you wish you fell?\n\nOr would you singe the thread of the insect’s hope\n\nIn the mass pulling you down into the well?\n\n\n\nMother sings she knows what you think,\n\nAnd your father yells, “Don’t pull on that string,”\n\nAnd the bully mocks, “You’re weak and you stink,”\n\nAnd the prophet cries out “Death has no sting.”\n\n\n\nDemons judge from their niche in the red-hot walls.\n\nThe rats chew through your bond to the pendulum.\n\nRip the cord born a bitch in a place grace falls.\n\nDon’t forget to let go just before the end.\n\n\n\nDoctor prescribes, “Go see a shrink,”\n\nAnd the maiden blinks back tears when you sink,\n\nAnd the Dutch boy laughs with you on the brink,\n\nAnd the angel whispers, “Ask for your wings.”",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-200_garage_low.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-200_garage_low.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/garage",
                "artworkId": 37,
                "lastArtworkId": 36,
                "nextArtworkId": null
            },
            {
                "order": -172,
                "id": "mir_eremos",
                "name": "Eremos",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on panel, 14\"H",
                "body": "Look, the clock has crawled to five oh six.\n\nThere’s a peg for each and proper use.\n\nWhile the model dries, the Chevy ticks.\n\nLater sleep to Cousin Brucie’s voice.\n\n\n\nNow it’s getting late in this lonely place\n\nwhere the faithful seek some sustenance.\n\nBabies called to heaven keep and bless\n\nquiet, ordered, clean indifference.\n\n\n\nHush, he’s tired managing the plant.\n\nTime to wash your hands of all of this.\n\nSimple food is fine for those who want\n\ntheir reward above in paradise.\n\n\n\nNow it’s getting late in this lonely place\n\nwhere the fallen seek some sustenance.\n\nBabies called to heaven keep and bless\n\nquiet, ordered, cleanly resentments.\n\n\n\nTrue, I cook, and read, objectify\n\nwith my back toward the miraculous.\n\nBut if I should wake before I die\n\none last supper’s bun would be enough.\n\n\n\nNow it’s getting late in this lonely place\n\nwhere the faithless seek some sustenance.\n\nBabies called to heaven keep and bless\n\nquiet, ordered, cleanly consequence.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-172_eremos.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-172_eremos.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/eremos-song",
                "artworkId": 38,
                "lastArtworkId": null,
                "nextArtworkId": 39
            },
            {
                "order": -170,
                "id": "mir_ephphatha",
                "name": "Ephphatha",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on panel, 14\"H",
                "body": "They brought in a boy with an impediment.\n\n“You unclean spirit, I command you to leave.\n\nEphphatha!” that is, be opened. Cast out,\n\nthe demon convulsed and cried out loud.\n\nIt’s not his tongue that was released.\n\n“Son, did you have an accident?”\n\n\n\nIn truth, you must become as a child,\n\nand suffer the swine on the mountainside.\n\n“Jerkoff! Faggot! Cocksucker! Queer!\n\nYou sure can’t talk but you can hear.\n\nYou fucking sound like porky pig.\n\nYou pissed your pants, you little prick.”\n\n\n\nThe rule is that you must raise your hand\n\nif you need to go to the restroom.\n\nWhen the teacher says “Yes, young man?”\n\nask “Please, may I go to the boy’s room?”.\n\nWhen the teacher says “Yes, you can,”\n\nthen get up and go to the bathroom.\n\n\n\nYour parents are busy. They have work to do.\n\nObey your teachers. Work hard in school.\n\nGo out to play in the wilderness.\n\nClimb past the big rock to the archery.\n\nWalk down the dirt road to the old quarry.\n\nLook out and stay away from the big kids.\n\n\n\nTo answer the phone, you must use these words:\n\n“Hello.  May I ask who’s calling, please?”\n\nWhen the class recites, and everyone takes turns,\n\ncount out the lines to see where you’ll seize.\n\nWhen the Lord sends you out into the herd,\n\nhold hands together, and jump in the sea.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-170_ephphatha.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-170_ephphatha.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-170_ephphatha_flat.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/ephphatha-song",
                "artworkId": 39,
                "lastArtworkId": 38,
                "nextArtworkId": 40
            },
            {
                "order": -168,
                "id": "mir_ichthyx",
                "name": "Ichthys",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on maple, 8\"H",
                "body": "Astride the dock and gunnel the boy capsizes.\n\nHe swims with the fishes, wishboned, he baptizes.\n\nThe water breaks his fall, so wide eyed I jump in,\n\nwaiting for no son of god or sons of bitches.\n\n\n\nAfter I pull him up from his quiet bright float,\n\nhe tells me, “Dad, I saw the bottom of the boat.”\n\nI had to sputter up alone, eyes not open.\n\nSaved before the father is very auspicious.\n\n\n\nThe father unmoored casts the lure in the water.\n\nA comforting rod spares his sight for the bobber.\n\nIt’s me rocking the hull of this fisher of men.\n\nIf he lands one for her supper it will fix this.\n\n\n\nDo babies hang the word on the line as a joke,\n\nor will they take the bait on the end of the hook?\n\nBitter in the tummy, sweet as honey on the tongue,\n\nthey taste their names in the book of life. Delicious.\n\n\n\nHe could lift me like Peter, submerged in my doubt.\n\nTo see if I’d sink and swim, he could throw me out.\n\nHe’s a sailor who can’t break the surface tension.\n\nPlease keep me, catch and release gets repetitious.\n\n\n\nI am frozen between. The cork never twitches.\n\nWe babies hover safe. They try hard to trick us.\n\nPray with Tertullian, “We are little fishes,\n\nborn in water, in the image of our Ichthys.”",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-168_ichthyx.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-168_ichthyx.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/ichthys-song",
                "artworkId": 40,
                "lastArtworkId": 39,
                "nextArtworkId": 41
            },
            {
                "order": -166,
                "id": "mir_eucharis",
                "name": "Eucharis",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on mixed media, 6\"H",
                "body": "Don’t talk back. Go to your room,\n\nor I’ll get the wooden spoon.\n\nWhen your father comes home soon\n\nthen you’ll sing a different tune.\n\nEach boy in Jesus has a friend.\n\n\n\nWonder at our daily bread.\n\nBy his hand we all are fed.\n\nIf you mock the word of god\n\nthen I’ll smack you in the head.\n\nPlease make this supper last, amen.\n\n\n\nAsk forgiveness in your prayer\n\nfor the sins that you can bear.\n\nWag your fingers in the air\n\nand I’ll knock you off your chair.\n\nPlease let this pitcher pass again.\n\n\n\nLiving in the Bible belt\n\nwith the lash that Jesus felt\n\nraises up a purple welt,\n\nmark of Cain upon your pelt,\n\na world as endless as the end.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-166_eucharis.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-166_eucharis.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-166_eucharis2.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/eucharis-song",
                "artworkId": 41,
                "lastArtworkId": 40,
                "nextArtworkId": 42
            },
            {
                "order": -164,
                "id": "mir_lazarus",
                "name": "Lazarus",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on wood, 4\"H",
                "body": "Walking home late and stoned I fall down into a ditch.\n\nHe grounds me and says he’ll pray for me, son of a bitch.\n\nHow can I put up with all of my parents’ bullshit?\n\nMan, I could use a hit.\n\n\n\nJesse buys us Seagram’s Seven for the English trip.\n\nWe swear on the Bible that we have not had a sip.\n\nHow do I get through detention and some stupid shrink?\n\nMan, I could use a drink.\n\n\n\n“You talk big but you can’t back it up,” she pulls her clothes.\n\nI can’t figure how to get inside her pantyhose.\n\nWhat can I do so these girls don’t think I’m such a joke?\n\nMan, I could use a toke.\n\n\n\nI flash the peace sign to the next car stopped at the light.\n\nThey open the door to drag me out and start a fight.\n\nWhen do I have a chance to show these guys what I’ve got?\n\nMan, I could use a shot.\n\n\n\nWhen we run away to Tampa, he calls on the phone.\n\nI sit and smoke till he gets back, says “I’m going home.”\n\nWhy do I come to life only when I’m acting bad?\n\nMan, I could use a tab.\n\n\n\nJesse gets his works, gives me a beer, calls me a punk.\n\nThen he’s in a bathtub of ice held up by those chicks.\n\nHow do I make sure I don’t OD using this junk?\n\nMan, I could use a fix.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-164_lazarus.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-164_lazarus.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-164_lazarus2.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/lazarus-song",
                "artworkId": 42,
                "lastArtworkId": 41,
                "nextArtworkId": 43
            },
            {
                "order": -162,
                "id": "mir_infirmity",
                "name": "Infirmity",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on wood, 4\"H",
                "body": "We went steady at your basement party,\n\nThough I did not know or ask what that meant,\n\nBut now I can see you look exactly\n\nLike my wife as a child I never met.\n\nBrought up in conformity\n\nI can’t ask why you prophecy\n\nMy eleven year infirmity.\n\n\n\nOne kiss on your cheek on the church hayride\n\nLeft some flower scent powder on my lips.\n\nGuess a taste for that must be acquired\n\nLike a taste for beer or cigarettes.\n\nYour fear and my sincerity\n\nLeft no question I’m predestined\n\nTo a thirteen year infirmity.\n\n\n\nMy palm like a spoon slips inside the shell\n\nOf a soft boiled egg in the back row dark,\n\nWhile you were afraid that I wouldn’t call\n\nIf you let me go too fast and too far.\n\nYour trust hides the urgency\n\nWith which I need you to redeem\n\nMy fifteen year infirmity.\n\n\n\nWhen I lifted the hem of your garment\n\nI felt some power take and keep me safe.\n\nYou cried when you remembered your boyfriend\n\nAnd extinguished me when you pulled away.\n\nI count down eternity\n\nWaiting on the kingdom come\n\nfor my seventeen year infirmity.\n\n\n\nWe got wet on the motorcycle ride.\n\nYou put my flannel shirt on in my room.\n\nIt felt so good at last to get inside.\n\nThey said we don’t want you in here alone.\n\nAnd your love’s uncertainty\n\nCannot replace the state of grace\n\nof my eighteen year infirmity.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-162_infirmity.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-162_infirmity.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/infirmity-song-2",
                "artworkId": 43,
                "lastArtworkId": 42,
                "nextArtworkId": 44
            },
            {
                "order": -160,
                "id": "mir_hammer",
                "name": "Hammer",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on wood and canvas, 8\"H",
                "body": "A camp sign says work makes you free,\n\nso I cut down and milled a tree.\n\nI notched the crosspiece best I could,\n\nyou know I work my hands in wood.\n\nWorking hard to crucify myself.\n\n\n\nHands idle are the devil’s play.\n\nClimbed and kicked the ladder away\n\nfrom cleats that I built for my feet,\n\nwith four spike nails between my teeth.\n\nWorking hard to crucify myself.\n\n\n\nI bend and nail my two feet down.\n\nMy left hand cups a nail I pound.\n\nLook at the hammer like a fool.\n\nA craftsman’s poor who blames his tool.\n\nWorking hard to crucify myself.\n\n\n\nSaved by grace not the work I planned,\n\nI cannot nail down my right hand.\n\nSince I can see I’ll hang here long,\n\nI have the time to write this song.\n\nWorking hard to crucify myself.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-160_hammer.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-160_hammer.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-160_hammer2.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-160_hammer_fold.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-160_hammer_folded.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/hammer-song",
                "artworkId": 44,
                "lastArtworkId": 43,
                "nextArtworkId": 45
            },
            {
                "order": -158,
                "id": "mir_transfiguration",
                "name": "Transfiguration",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on wood and canvas, 12\"H",
                "body": "Such a happy chubby baby,\n\nbut he was born in Adam’s sin.\n\nQuiz him on his half the Bible.\n\nYou’ve raised up such a fine young man.\n\n\n\nSandwiched by the other infants,\n\nhear my thrice begotten son\n\nmourn for the beast’s indifference\n\nto the corpse he will become.\n\n\n\nHe seemed depressed from his travels,\n\nlost on the mountain, left alone.\n\nHome, work, family, so wonderful,\n\nhis better half has saved his soul.\n\n\n\nBeloved bone man’s countenance\n\nin bright clouds’ raiment glistens.\n\nBehold the son I will renounce\n\nso my children will listen.\n\n\n\nOh, this is real, real bad, you know,\n\nbut I’m just fine above the waist.\n\nI guess I lost him long ago,\n\nI don’t like going where he stays.\n\n\n\nWhile the boys are heavy with sleep,\n\nthe priest sleeps with the fathers.\n\nArise to live, condemn, believe\n\nbut tell no one till after.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-158_transfiguration.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-158_transfiguration.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-158_transfiguration_2.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-158_transfiguration_flat.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/transfiguration-song",
                "artworkId": 45,
                "lastArtworkId": 44,
                "nextArtworkId": 46
            },
            {
                "order": -156,
                "id": "mir_still",
                "name": "Still",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on panel, 7x10\"",
                "body": "Ill winds slap me about, the gale whips off my clothes,\n\nsucks the life from my lungs and the words from my throat.\n\nThere’s no love still enough to rebuke, calm the flap\n\nso a wisp of my voice can sneak out.\n\n\n\nCareless flames fondle me, their tongues lick off my skin,\n\nchar my cheeks to cinders and my lips to a clink.\n\nThere’s no love clear and cold distilled to wet my trap\n\nfor a spittle of voice to leak out.\n\n\n\nMonster swells raise shear walls that fall all over me,\n\nhug me way down below where I can’t see to breathe.\n\nThere’s no love light and deep to still buoy me up top,\n\npress my chest so my voice will squeak out.\n\n\n\nDry dirt quakes, dead earth breaks, the rock splits like a shake,\n\ntumbles me in a pit where I can’t hear the dark.\n\nThere’s no love thick and quick that will bind up the gap\n\nand still bear a small voice to peek out.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-156_still.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-156_still.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/still-song",
                "artworkId": 46,
                "lastArtworkId": 45,
                "nextArtworkId": 47
            },
            {
                "order": -154,
                "id": "mir_temple",
                "name": "Temple",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on panel, 7x10\"",
                "body": "I drink so I stop thinking.\n\nI think I should stop drinking.\n\nI sure don’t need no savior\n\nto turn my wine to water.\n\n\n\nNo one can see my impotence.\n\nNo ear to hear the discordance,\n\nso slice it off with a razor\n\nand spurn me to take in another.\n\n\n\nAlone I stand as I please\n\ninside all these empty days\n\nthat paralyze me like a taser\n\nwhile I yearn to lean on a lover.\n\n\n\nWe’re slime on a rock in the sky,\n\nselected to feed, breed and die,\n\nbut my works will win holy favor\n\nand earn salvation forever.\n\n\n\nI raise my temple to heaven,\n\nupheld by rage and sarcasm,\n\nincised with a black light laser\n\nthat burns thru stone like butter.\n\n\n\nIn a halo of sodium vapor\n\nI search for a key on the paper.\n\nIf I look out in the umbra\n\nit churns my gut and I shudder.\n\n\n\nThe key that nobody needed\n\nrings sound and fury repeated.\n\nDon’t need no help from our father\n\nto learn to talk with a stutter.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-154_temple_panel.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-154_temple_panel.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/temple-song",
                "artworkId": 47,
                "lastArtworkId": 46,
                "nextArtworkId": 48
            },
            {
                "order": -152,
                "id": "mir_tletha",
                "name": "Tletha",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on panel, 7x10\"",
                "body": "Siblings alive suffer in sin, not those still born.\n\nEach day I roll the slab away to release her.\n\nWhy can’t I sleep with her until resurrection?\n\nAt night they pray she’s interred where brothers keep her.\n\n\n\nThis clever boy tricks death to try to tie the cord.\n\nThe last and first get the birth right but not the teat.\n\nThey blind their eyes and move ahead, without a word.\n\n“Awake. Arise. Give the maiden some meat to eat.”\n\n\n\nThe bride lays hands on errant boys, holds them nearer.\n\nVirtue left her to mute demons of her bachelors.\n\nShe wades into issues of blood white as manna.\n\nFaith made her whole and staunched the flow till the rapture.\n\n\n\nI am condemned to stone in place of one rough tree.\n\nI turn around and ask alone, “Who touched me?”",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-152_tletha.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-152_tletha.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/tletha-song",
                "artworkId": 48,
                "lastArtworkId": 47,
                "nextArtworkId": 49
            },
            {
                "order": -150,
                "id": "mir_zaphthani",
                "name": "Zaphthani",
                "date": {
                    "year": 2009
                },
                "series": "The Secret Miracle",
                "seriesId": 3,
                "description": "acrylic on panel, 7x10\"",
                "body": "The baby cries but it’s not time to feed.\n\nWander the wilderness, never go home.\n\nTwin pillars lift me to see what I need.\n\nDaily bread on this peak tastes sweet as stone.\n\n\n\nOverthrown to atone\n\nFor nothing is enough\n\nThat I fake it alone\n\nWith no one’s love.\n\n\n\nOn command raise me up to sacrifice.\n\nA sparrow falls eager to fill its fate.\n\nStay the hand, desert me for forty nights.\n\nLet this life pass from me. Or, I can wait.\n\n\n\nOverthrown to atone\n\nFor nothing is enough\n\nThat I fake it alone\n\nWithout your love.\n\n\n\nFrom Eden I leave with all I can take.\n\nBetter to reign down here than serve above.\n\nThis vista reveals what I must forsake.\n\nI don’t cling to the ark, give me a shove.\n\n\n\nOverthrown to atone\n\nFor nothing is enough\n\nThat I fake it alone\n\nWith all your love.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-150_zaphthani.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-150_zaphthani.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/zaphthani-song",
                "artworkId": 49,
                "lastArtworkId": 48,
                "nextArtworkId": null
            },
            {
                "order": -122,
                "id": "pen_chairification",
                "name": "Chairification",
                "date": {
                    "year": 2008
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed hardwoods, 72\"H (raised)",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-122_chairifiction.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-122_chairifiction.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-122_chairifiction_sitting.jpg"
                ],
                "artworkId": 50,
                "lastArtworkId": null,
                "nextArtworkId": 51
            },
            {
                "order": -120,
                "id": "pen_aqedah",
                "name": "Aqedah",
                "date": {
                    "year": 2008
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed hardwoods, 28\"H",
                "body": "Aqedah is the Hebrew word for the binding of Isaac.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-120_aqedah.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-120_aqedah.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-120_aqedah2.jpg"
                ],
                "artworkId": 51,
                "lastArtworkId": 50,
                "nextArtworkId": 52
            },
            {
                "order": -118,
                "id": "pen_dagon",
                "name": "Dagon",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 18\"H (on 12\" box)",
                "body": "Dagon is the Philistine god whose temple Samson destroyed.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-118_dagon_inside.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-118_dagon_inside.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-118_dagon_eyelevel.jpg"
                ],
                "artworkId": 52,
                "lastArtworkId": 51,
                "nextArtworkId": 53
            },
            {
                "order": -116,
                "id": "pen_vulning",
                "name": "Vulning (for Marcia)",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 4\"H",
                "body": "Vulning is the medieval belief that a pelican pierced its breast with its beak to feed its young with its own blood.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-116_vulning.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-116_vulning.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-116_vulning_back.jpg"
                ],
                "artworkId": 53,
                "lastArtworkId": 52,
                "nextArtworkId": 54
            },
            {
                "order": -114,
                "id": "pen_penuel",
                "name": "Penuel",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 8\"H",
                "body": "Penuel is the name of the place where Jacob wrestled with an angel until the break of dawn.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-114_penuel_low.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-114_penuel_low.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-114_penuel_side.jpg"
                ],
                "artworkId": 54,
                "lastArtworkId": 53,
                "nextArtworkId": 55
            },
            {
                "order": -112,
                "id": "pen_decalog",
                "name": "decalog",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 7\"H",
                "body": "A decalog is an authoritative set of rules, or, when capitalized, the Ten Commandments.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-112_decalog.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-112_decalog.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-112_decalog_back.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-112_decalog_side.jpg"
                ],
                "artworkId": 55,
                "lastArtworkId": 54,
                "nextArtworkId": 56
            },
            {
                "order": -110,
                "id": "pen_mansions",
                "name": "Mansions",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 21\"H",
                "body": "In medieval cathedrals, Bible scenes were enacted in small booths around the nave called mansions.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-110_mansions.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-110_mansions.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-110_mansions_back.jpg"
                ],
                "artworkId": 56,
                "lastArtworkId": 55,
                "nextArtworkId": 57
            },
            {
                "order": -108,
                "id": "pen_antipatros",
                "name": "Antipatros",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 10\"H",
                "body": "Herod Antipatros was the Tetrarch of Gallilee at the time of the Gospels.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-108_antipatros.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-108_antipatros.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-108_antipatros_2.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-108_antipatros_back.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-108_antipatros_left.jpg"
                ],
                "artworkId": 57,
                "lastArtworkId": 56,
                "nextArtworkId": 58
            },
            {
                "order": -106,
                "id": "pen_deuce",
                "name": "Deuce",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 17\"H",
                "body": "Deuce is a nickname for the devil, and a play on the words deus, deux, due, and do",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-106_deuce_front.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-106_deuce_front.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-106_deuce_sarcophagus.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-106_deuce_triptych.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-106_duece_side.jpg"
                ],
                "artworkId": 58,
                "lastArtworkId": 57,
                "nextArtworkId": 59
            },
            {
                "order": -104,
                "id": "pen_upharsin",
                "name": "Upharsin",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 23\"H",
                "body": "Upharsin is the word the unseen hand wrote on the wall of Nebuchadnezzar’s palace, meaning “found wanting”.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-104_upharsim_crack.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-104_upharsim_crack.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-104_upharsim_madman.jpg"
                ],
                "artworkId": 59,
                "lastArtworkId": 58,
                "nextArtworkId": 60
            },
            {
                "order": -102,
                "id": "pen_phix",
                "name": "Phix",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 13\"H",
                "body": "Phix was the name of the sphinx who guarded the gates of Thebes and devoured anyone unable to answer her riddles.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-102_phix_front.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-102_phix_front.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-102_phix_back_right_2.jpg"
                ],
                "artworkId": 60,
                "lastArtworkId": 59,
                "nextArtworkId": 61
            },
            {
                "order": -100,
                "id": "pen_eskatos",
                "name": "Eskatos",
                "date": {
                    "year": 2009
                },
                "series": "The Penal Colony",
                "seriesId": 4,
                "description": "mixed media, 8\"H",
                "body": "Eskatos is Greek for final or end.",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-100_eskatos.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-100_eskatos.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-100_eskatos_back.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-100_eskatos_side.jpg"
                ],
                "artworkId": 61,
                "lastArtworkId": 60,
                "nextArtworkId": null
            },
            {
                "order": -76,
                "id": "sta_carryout",
                "name": "Carryout",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 20\"H (open)",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-76_carryout_tilt.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-76_carryout_tilt.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-76_carryout_flat.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-76_carryout_closed.jpg"
                ],
                "artworkId": 62,
                "lastArtworkId": null,
                "nextArtworkId": 63
            },
            {
                "order": -74,
                "id": "sta_case",
                "name": "Case",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 12\"H (open)",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-74_case_opening.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-74_case_opening.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-74case_closed.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-74_case_open.jpg"
                ],
                "artworkId": 63,
                "lastArtworkId": 62,
                "nextArtworkId": 64
            },
            {
                "order": -72,
                "id": "sta_flask",
                "name": "Flask",
                "date": {
                    "year": 2010
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 9\"H (closed)",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-72_flask_opening_2.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-72_flask_opening_2.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-72_flask_open_1.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-72_flask.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-72_flask_upright.jpg"
                ],
                "artworkId": 64,
                "lastArtworkId": 63,
                "nextArtworkId": 65
            },
            {
                "order": -70,
                "id": "sta_trap",
                "name": "Trap",
                "date": {
                    "year": 2010
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 12\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-70_trap_front_side.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-70_trap_front_side.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-70_trap_front_close.jpg"
                ],
                "artworkId": 65,
                "lastArtworkId": 64,
                "nextArtworkId": 66
            },
            {
                "order": -68,
                "id": "sta_locket",
                "name": "Locket",
                "date": {
                    "year": 2010
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 5\"H (closed)",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-68_locket_side_view.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-68_locket_side_view.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-68_locket_disjoint.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-68_locket_closed.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-68_locket_4.jpg"
                ],
                "artworkId": 66,
                "lastArtworkId": 65,
                "nextArtworkId": 67
            },
            {
                "order": -66,
                "id": "sta_carousel",
                "name": "Carousel",
                "date": {
                    "year": 2010
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 12\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-66_carousel%20_uke.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-66_carousel%20_uke.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-66_carousel_gears.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-66_carousel_people.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-66_carousel_stephen.jpg"
                ],
                "videoLink": "https://vimeo.com/252809388",
                "artworkId": 67,
                "lastArtworkId": 66,
                "nextArtworkId": 68
            },
            {
                "order": -64,
                "id": "sta_flat",
                "name": "Flat",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 6\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-64_flat_above.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-64_flat_above.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-64_flat_lounge.jpg"
                ],
                "videoLink": "https://vimeo.com/252809463",
                "artworkId": 68,
                "lastArtworkId": 67,
                "nextArtworkId": 69
            },
            {
                "order": -62,
                "id": "sta_tin",
                "name": "Tin",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 8\"H",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-62_tin_trays_out.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-62_tin_trays_out.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-62_tin_open.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-62_tin_contents.jpg"
                ],
                "artworkId": 69,
                "lastArtworkId": 68,
                "nextArtworkId": 70
            },
            {
                "order": -60,
                "id": "sta_basin",
                "name": "Basin",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 6\"H (pieces are megnetic)",
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/-60_basin.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/-60_basin.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/-60_basin_side.jpg"
                ],
                "videoLink": "https://vimeo.com/252809761",
                "artworkId": 70,
                "lastArtworkId": 69,
                "nextArtworkId": 71
            },
            {
                "order": -58,
                "id": "sta_carapace",
                "name": "Carapace",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, 6\"H (pieces are magnetic)",
                "body": "Running down the dirt road,\n\nPadlock on the chain link,\n\nTripping in the black woods,\n\nDoesn’t (does it) matter what you think.\n\n\n\nCrack an ostrich shell of powder.\n\nSpit in dust to make the mother.\n\nKnead it holy, just add water.\n\nGlue the pieces back together.\n\n\n\nBurn the hollow cast of mortals.\n\nBreak the body. Take angel cake.\n\nCut the crust off bite size morsels.\n\nEat, remember, and drive the stake.\n\n\n\nBaptize the babe dripping Venus.\n\nCrush the infant imperfect text.\n\nUnbind the hair to dry the fetus.\n\nRedeem the words the Book rejects.\n\n\nDug up in the backyard,\n\nWash it in the water,\n\nOpen with a pry bar,\n\nNo life no truth in matter.\n\n\n\nWrap the rocks in sackcloth,\n\nHammer nails the lid down,\n\nBuried in a pine box,\n\nWhat’s the matter underground?\n\n\n\nWrite Timothy’s three-faced letter.\n\nStuff the porky piggy Dutch boy.\n\nChubby stutter makes him madder.\n\nBust the bank for traitors’ money.\n\n\n\nSmash the dead head crucial fiction.\n\nPound the spikes in, so where’s the sting.\n\nThirty talents wait inspection.\n\nScatter flowers before morning.\n\n\n\nOn a carapace the virgin shatters,\n\nBloody muddy consummation.\n\nMiracles mend broke old bottles.\n\nSave the wine for exhumation.",
                "previewImage": "http://undrian.com/sta_index_files/carapace%20box.jpg",
                "images": [
                    "http://undrian.com/sta_index_files/carapace%20box.jpg"
                ],
                "videoLink": "https://vimeo.com/252809671",
                "artworkId": 71,
                "lastArtworkId": 70,
                "nextArtworkId": 72
            },
            {
                "order": -56,
                "id": "sta_crawlspace",
                "name": "Crawlspace",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "body": "She already has a boyfriend.\n\nSmash the diamonds with a hammer.\n\nKeep him tied up for the weekend.\n\nThey can’t hold him in the slammer.\n\n\n\nBaby sister melts like chocolate.\n\nCan’t stop pacing in the office,\n\nSofa sleeps in furry blankets.\n\nDown on the farm, muck the horses.\n\n\n\nThe world you see, the world you dream,\n\nDefend, create, hallucinate,\n\nAll you know true, what grace makes you.\n\n\n\nFlashover in the controlled burn\n\nFinds asylum with his father.\n\nIt’s fat city for the bird man.\n\nPolice ask are you guys lovers?\n\n\n\nAgents listen in the crawlspace.\n\nKicked the door in, swears the landlord.\n\nOscilloscope traces sound waves.\n\nClear the balance. Take the records.\n\n\n\nThe still small voice beneath the noise\n\nThat reads your mind demands your rights.\n\nNobody knew where grace takes you.\n\n\n\nCrowds of people want to steal it.\n\nWith a hacksaw cut the barrel.\nInsulation muffles secrets.\n\nBlock hypnosis with tin foil.\n\n\n\nDrive by in the Toronado.\n\nWhy did you molest your daughter?\n\nFixer upper in the ghetto\n\nCan’t afford the guns and lawyers.\n\n\n\nCan’t comprehend you understand.\n\nThe two-faced friend is one of them.\n\nWhat else is new? Grace forsakes you.",
                "previewImage": "http://undrian.com/sta_index_files/crawlspace%20eyeball.jpg",
                "images": [
                    "http://undrian.com/sta_index_files/crawlspace%20eyeball.jpg"
                ],
                "videoLink": "https://vimeo.com/252809876",
                "artworkId": 72,
                "lastArtworkId": 71,
                "nextArtworkId": 73
            },
            {
                "order": -54,
                "id": "sta_school",
                "name": "School Time and Mr Reihus",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, dummy heads approx 6\"H",
                "previewImage": "http://undrian.com/sta_index_files/school%20door.jpg",
                "images": [
                    "http://undrian.com/sta_school_files/school%20lunch.jpg",
                    "http://undrian.com/sta_school_files/school%20whistle.jpg",
                    "http://undrian.com/sta_school_files/school%20dimmy.jpg",
                    "http://undrian.com/sta_school_files/school%20spell.jpg"
                ],
                "videoLink": "https://vimeo.com/252809944",
                "artworkId": 73,
                "lastArtworkId": 72,
                "nextArtworkId": 74
            },
            {
                "order": -52,
                "id": "sta_chancel",
                "name": "Chancel",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, dummy heads approx 6\"H",
                "body": "Their works prove their faith they in grace are elect.\n\nThe triple X cross the unfaithful reject.\n\nHe knows before time how each one will decide\n\nTo choose to believe or be cast in the fire.\n\n\n\nThe child full of pride will demand\n\nAnswers he cannot understand.\n\n\n\nFalse science asserts man descends from an ape.\n\nTo confound the skeptic he fossils creates.\n\nHe gives to his children dominion o’er earth\n\nAnd destroys the heathen his glory to serve.\n\n\n\nHis reasons are not known to man.\n\nWe must place our trust in his plan.\n\n\n\nPerfect from the void in his image forms man,\n\nAnd unleash the serpent to tempt them to sin,\n\nTill plague war and famine shall cut short their days\n\nAnd in desolation keep singing his praise.\n\n\n\nObey without thought his command\n\nAnd live fore’er at his right hand.",
                "previewImage": "http://undrian.com/sta_index_files/chancel%20pulpit.jpg",
                "images": [
                    "http://undrian.com/sta_index_files/chancel%20pulpit.jpg"
                ],
                "videoLink": "https://vimeo.com/252810028",
                "artworkId": 74,
                "lastArtworkId": 73,
                "nextArtworkId": 75
            },
            {
                "order": -50,
                "id": "sta_workshop",
                "name": "workshop",
                "date": {
                    "year": 2011
                },
                "series": "Stations",
                "seriesId": 5,
                "description": "mixed media, dummy approx 24\"H",
                "body": "I’m not pinocchio.\n\nThis isn’t real, you know.\n\nIt’s just a picture show\n\nOn video.\n\n\n\nHe writes a play to star the child\n\nWho works as a carpenter a while.\n\nUp on the beam he has to die\n\nTo come alive.\n\n\n\nYou tell me it’s alright.\n\nWhen can I go outside?\n\nDon’t leave me here at night.\n\nTurn on the light.\n\n\n\nI have no eyes but you can see\n\nInside what I’m supposed to be\n\nSo cut away what is not me\n\nAnd set me free.\n\n\n\nYou say it will not hurt.\n\nYou say it could be worse.\n\nYou say I am the first\n\nTo hear the word.\n\n\n\nThe trunk is milled or left to rot.\n\nThe jamb is nailed and then torn out.\n\nThe puppet’s carved and kept or not\n\nAfter the shot.\n\n\n\nWill this be over soon?\n\nIs this where I was born?\n\nDon’t leave me here alone.\n\nLet me go home.",
                "previewImage": "http://undrian.com/sta_index_files/workshop%20gate.jpg",
                "images": [
                    "http://undrian.com/sta_index_files/workshop%20gate.jpg"
                ],
                "videoLink": "https://vimeo.com/252810077",
                "artworkId": 75,
                "lastArtworkId": 74,
                "nextArtworkId": null
            },
            {
                "order": -26,
                "id": "mech_run",
                "name": "Run",
                "date": {
                    "year": 2011
                },
                "series": "Mechanism",
                "seriesId": 6,
                "body": "Come back here.\n\nBetter not run.\n\nHurts him more\n\nAfter he’s gone.\n\n\n\nMechanic belt slips the miller wife\n\nWho cut his tongue on the pulley slice,\n\nThe wheels in wheels grinding slow and fine.\n\n\n\nFather son\n\nAnd oily mouse,\n\nThree in one\n\nStop the noise.\n\n\n\nHis crankshaft and his connecting rod\n\nWill come for him as he runs around\n\nAnd when he’s old they still spin his head.\n\n\n\nSpare the lash,\n\nSpoil the boy,\n\nSeize the mice\n\nThe blades blow.\n\n\n\nAn endless loop in the bible belt,\n\nHe needs the leather his savior felt,\n\nThe mark of cain embossed on his pelt.\n\n\n\nDelft dumb blind\n\nFrigid blood,\n\nRun down time\n\nFor his own good.",
                "previewImage": "http://undrian.com/mech_index_files/run.jpg",
                "images": [
                    "http://undrian.com/mech_index_files/run.jpg"
                ],
                "videoLink": "https://vimeo.com/252805738",
                "artworkId": 76,
                "lastArtworkId": null,
                "nextArtworkId": 77
            },
            {
                "order": -24,
                "id": "mech_sleep",
                "name": "Sleep",
                "date": {
                    "year": 2011
                },
                "series": "Mechanism",
                "seriesId": 6,
                "description": "Sleep, mixed media, 2011, figure about 6” H standing up.",
                "body": "Melanoma, heart attack.\n\nRats in attic rattle traps.\n\nLawsuit stolen trade secret.\n\nBuy high sell low, owe more tax.\n\n\n\n(chorus)\n\nAre not sleeping, toss and turn,\n\nRuminate awaiting god damn dawn.\n\n\n\nFlabby slouching lower back.\n\nPromise her house but retract.\n\nSend in the work they reject.\n\nShe’s had enough of this crap.\n\n\n\nCome on the grass outside her.\n\nTurn left hit the other car.\n\nWaiter giggles can’t order.\n\nFrozen fingers, gears won’t turn.",
                "previewImage": "http://undrian.com/mech_index_files/sleep.jpg",
                "images": [
                    "http://undrian.com/mech_index_files/sleep.jpg"
                ],
                "videoLink": "https://vimeo.com/252805772",
                "artworkId": 77,
                "lastArtworkId": 76,
                "nextArtworkId": 78
            },
            {
                "order": -22,
                "id": "mech_wash",
                "name": "Wash",
                "date": {
                    "year": 2011
                },
                "series": "Mechanism",
                "seriesId": 6,
                "description": "mixed media, 2011, figure about 6” H standing up.",
                "body": "He gets up from the bed\n\nturn the tap splash his face\n\nwash away yellow cake\n\nround the drain not awake.\n\nHow in hell can a man\n\nclear the sand from his eye\n\nwhen he can’t find his way\n\n‘cause they turned out the light?\n\n\n\nHe gets up from the chair\n\nto the sink soak his head\n\nrinse away black cob webs\n\nroaring blood sober numb.\n\nHow in hell can a guy\n\nclean the shame from the sty\n\nwhen he won’t go back home\n\nand burp up mouth of bile?\n\n\n\nHe gets up from the floor\n\nto dilute dirty tears\n\nwipe his cheek slapped upright\n\nwet behind burning ears.\n\nHow in hell can a boy\n\ncleave the past mirror missed\n\nwhen he don’t know a sin\n\nto forgive or confess?",
                "previewImage": "http://undrian.com/mech_index_files/wash.jpg",
                "images": [
                    "http://undrian.com/mech_index_files/wash.jpg"
                ],
                "videoLink": "https://vimeo.com/252805801",
                "artworkId": 78,
                "lastArtworkId": 77,
                "nextArtworkId": 79
            },
            {
                "order": -20,
                "id": "mech_work",
                "name": "Work",
                "date": {
                    "year": 2011
                },
                "series": "Mechanism",
                "seriesId": 6,
                "description": "mixed media, 2011, figure about 6” H standing up.",
                "body": "Repeating:\n\nevery night sweep up the same floor,\n\nlooking at the clock.\n\nNo one knows\n\nthis is a performance art work,\n\nlooking for the next paycheck,\n\nTill the time to\n\nwait in line to punch the time card,\n\nrace out of the parking lot.\n\nIt’s too\n\nbright and noisy to sleep all day.\n\nGet up. Go back to work.\n\n\n\nRepeating:\n\nevery day work on the same stuff,\n\npassing time away.\n\nNo one knows\n\nthis is an important art work,\n\nsay it doesn’t pay to play,\n\nTill the time to\n\nwait to sink into a stupor,\n\nrise up, stumble off to quit.\n\nIt’s too\n\ndark and anxious to sleep all night.\n\nGet up. Go back to work.",
                "previewImage": "http://undrian.com/mech_index_files/work%20close.jpg",
                "images": [
                    "http://undrian.com/mech_index_files/work%20close.jpg"
                ],
                "videoLink": "https://vimeo.com/252807669",
                "artworkId": 79,
                "lastArtworkId": 78,
                "nextArtworkId": 80
            },
            {
                "order": -18,
                "id": "mech_drink",
                "name": "Drink",
                "date": {
                    "year": 2011
                },
                "series": "Mechanism",
                "seriesId": 6,
                "description": "mixed media, 2011, figure about 6” H standing up.",
                "body": "Take my wealth and family,\n\nLeave me hanging on the vine,\n\nTake my health and memory,\n\nJust don’t take my cheap red wine.\n\n\n\nHa ha ha, cheap red wine,\n\nPour a glass to pass the time.\n\nHa ha ha, cheap red wine,\n\nDon’t remember why I’m cryin’.\n\n\n\nSome drink beer or rye whiskey,\n\nSome like pot or LSD,\n\nCrystal meth or ecstasy,\n\nJust ferment the grape for me.\n\n\n\nHa ha ha, cheap red wine,\n\nLift a glass to pass the time.\n\nHa ha ha, cheap red wine,\n\nDon’t remember if I’m cryin’.\n\n\n\nHeal the sick, cure the blind,\n\nCast out demons into swine,\n\nBut no trick was near as fine\n\nAs turning water into wine.\n\n\n\nHa ha ha, cheap red wine,\n\nDrink a glass to pass the time.\n\nHa ha ha, cheap red wine,\n\nDon’t remember, never mind.",
                "previewImage": "http://undrian.com/mech_index_files/drink.jpg",
                "images": [
                    "http://undrian.com/mech_index_files/drink.jpg"
                ],
                "videoLink": "https://vimeo.com/252805638",
                "artworkId": 80,
                "lastArtworkId": 79,
                "nextArtworkId": 81
            },
            {
                "order": -16,
                "id": "mech_watch",
                "name": "Watch",
                "date": {
                    "year": 2011
                },
                "series": "Mechanism",
                "seriesId": 6,
                "description": "mixed media, 2011, figure about 6” H standing up.",
                "body": "There must be something\n\non a better station\n\nbroadcasting live between\n\nreality and reruns.\n\n\n\nThere must be somes-\n\nthetic reprogramming\n\nbetween the rattle out\n\nand the opening gurgle in.\n\n\n\nThere must be sometime\n\nto pause mid arc on air\n\nbetween the ambulance\n\nand our unscheduled sponsor break.\n\n\n\nThere must be somewhere\n\nthe viewers flip between\n\nthe victim they despise\n\nand ghosts they never believe.\n\n\n\nThere must be someway\n\nto mute the nightly news\n\nof loathing lethargy\n\nbetween the bright squeaky snow.\n\n\n\nThere must be someone\n\nbetween the fear and lust\n\nthat blacks out childhood\n\nfor the studio audience.",
                "previewImage": "http://undrian.com/mech_index_files/watch%204.jpg",
                "images": [
                    "http://undrian.com/mech_index_files/watch%204.jpg"
                ],
                "videoLink": "https://vimeo.com/252807636",
                "artworkId": 81,
                "lastArtworkId": 80,
                "nextArtworkId": 82
            },
            {
                "order": -14,
                "id": "mech_eat",
                "name": "Eat",
                "date": {
                    "year": 2012
                },
                "series": "Mechanism",
                "seriesId": 6,
                "description": "mixed media, 2012, figure about 6” H.",
                "body": "Someone hums a monotone\n\nhymn in her pliant kitchen.\n\nOpen hard the monolith\n\nwhich holds fast the condiments.\n\nStick his head in the ice box,\n\nsnatch and gulp a late morsel.\n\nShut that door, don’t let the chill\n\ngo to waste. Spoil your supper.\n\nThe prophet gnashes his teeth,\n\n“Who hid my pepperoni?”\n\nWe prefer our simple food,\n\nwe don’t need something fancy.\n\n\n\nGet enough? Was it good?\n\nHow was the presentation?\n\nBreak the seal, refrigerate\n\nLeftover expiration.\n\nSatisfy the multitude\n\nwith stale loaves and stinking fishes.\n\nDip the bread into the sup,\n\nour furtive bites betray us.\n\nCut the fattened salami\n\nto handle a hungry john.\n\nThere’s a mess served better cold,\n\nReplenished each desert morn.",
                "previewImage": "http://undrian.com/mech_index_files/eat.jpg",
                "images": [
                    "http://undrian.com/mech_index_files/eat.jpg"
                ],
                "videoLink": "https://vimeo.com/252805664",
                "artworkId": 82,
                "lastArtworkId": 81,
                "nextArtworkId": 83
            },
            {
                "order": -12,
                "id": "mech_make",
                "name": "Make",
                "date": {
                    "year": 2012
                },
                "series": "Mechanism",
                "seriesId": 6,
                "description": "mixed media, 2012, little figure about 1/2” H, and big figure about 6” H, standing up.",
                "body": "You’re making a mechanism\n\nthat’s making a mechanism\n\nthat’s making a mechanism\n\nthat’s making you, that’s making you.\n\n\n\nYou lay down in your bed,\n\ncan’t sleep the whole night through.\n\nYou keep tossing turning\n\nlike the mechanism making you.\n\nYou ask if your nightmare\n\nis a dream that’s coming true.\n\nYou keep running sinful\n\nlike the mechanism making you.\n\n\n\nYou’re working a whirligig\n\nthat’s working a whirligig\n\nthat’s working a whirligig\n\nthat’s working you, that’s working you.\n\n\n\nYou can’t clear your eyesight\n\nwith the walls and floors askew.\n\nYou keep splashing your face\n\nlike the mechanism making you.\n\nYou work in the factory\n\nwhere they tell you what to do.\n\nYou keep sweeping the floor\n\nlike the mechanism making you.\n\n\n\nYou’re turning an automaton\n\nthat’s turning an automaton\n\nthat’s turning an automaton\n\nthat’s turning you, that’s turning you.\n\n\n\nIf you are a drunkard,\n\ncan’t stop at one or two.\n\nYou keep drinking red wine\n\nlike the mechanism making you.\n\nWhen you watch television\n\nwith nothing to turn to,\n\nyou keep changing channels\n\nlike the mechanism making you.\n\nIf you are a glutton,\n\nbite more than you can chew.\n\nYou keep eating cold cuts\n\nlike the mechanism making you.\n\n\n\nYou’re making a mechanism\n\nthat’s making a mechanism\n\nthat’s making a mechanism\n\nthat’s making you, that’s making you.",
                "previewImage": "http://undrian.com/mech_index_files/make.jpg",
                "images": [
                    "http://undrian.com/mech_index_files/make.jpg"
                ],
                "videoLink": "https://vimeo.com/252805694",
                "artworkId": 83,
                "lastArtworkId": 82,
                "nextArtworkId": 84
            },
            {
                "order": -10,
                "id": "mech_movie",
                "name": "Mechanism (The Movie)",
                "date": {
                    "year": 2012
                },
                "series": "Mechanism",
                "seriesId": 6,
                "description": "Mechanism movie starring clips of all the individual mechansims and their songs combined with live action.",
                "body": "You’re making a mechanism that’s making a mechanism\n\nThat’s making a mechanism that’s making you, that’s making you.\n\nYou lay down in your bed, can’t sleep the whole night through.\n\nYou keep tossing turning like the mechanism making you…\n\nAre not sleeping, toss and turn, ruminate awaiting god damn dawn…\n\nCome back here. Better not run. Hurts him more after he’s gone.\n\nMechanic belt slips the miller wife who cut his tongue on the pulley slice…\n\nHe gets up from the floor to dilute dirty tears\n\nWipe his cheek slapped upright wet behind burning ears…\n\nYou keep splashing your face like the mechanism making you.\n\nYou work in the factory where they tell you what to do…\n\nNo one knows this is a performance art work,\n\nLooking for the next paycheck…\n\nHeal the sick, cure the blind, cast out demons into swine,\n\nBut no trick was near as fine as turning water into wine…\n\nThere must be something on a better station\n\nBroadcasting live between reality and reruns…\n\nThe prophet  gnashes his teeth, “Who hid my pepperoni?”\n\nWe prefer our simple food, we don’t need something fancy…\n\nYou ask if your nightmare is a dream that’s coming true.\n\nYou keep running sinful like the mechanism making you…\n\nMelanoma, heart attack, rats in attic chew on traps…\n\nAn endless loop in the bible belt, he needs the leather his savior felt…\n\nHow in hell can a man clear the sand from his eye,\n\nWhen he can’t find his way cause they turned out the light…\n\nEvery night sweep up the same floor, looking at the clock…\n\nHa ha ha, cheap red wine, drink a glass to pass the time…\n\nWhen you watch television with nothing to turn to,\n\nYou keep changing channels like the mechanism making you…\n\nShut that door, don’t let the chill go to waste. Spoil your supper…\n\nYou keep eating cold cuts like the mechanism making you…\n\nAre not sleeping, toss and turn…\n\nRun down time for his own good…\n\nWhen he won’t go back home and burp up mouth of bile…\n\nWait in line to punch the time card…\n\nDon’t remember, never mind…\n\nThat blacks out childhood…\n\nThere’s a mess served better cold…\n\nYou’re making a mechanism that’s making a mechanism\n\nThat’s making a mechanism that’s making you, that’s making you…\n\nThere must be somewhere the viewers flip between\n\nThe victim they despise and ghosts they never believe.",
                "previewImage": "http://undrian.com/mech_index_files/mechanism.jpg",
                "images": [
                    "http://undrian.com/mech_index_files/mechanism.jpg"
                ],
                "videoLink": "https://vimeo.com/252807694",
                "artworkId": 84,
                "lastArtworkId": 83,
                "nextArtworkId": null
            },
            {
                "order": -6,
                "id": "break_4whlsgd",
                "name": "4WHLSGD",
                "date": {
                    "year": 2012
                },
                "series": "Break",
                "seriesId": 7,
                "description": "mixed media, 2012, cyclist about 4” high\n\n(4WHLSGD is a personalized license plate from Animal Farm without EE OO.)",
                "body": "The screw unwinds, ratchets the pendulum.\n\nThe pulley turns, tightens the trigger string.\n\nRide on the right of the white line\n\nWhere you’re safe till the time is up.\n\n\n\nAn escapement from the cycle of fate,\n\nPedal faster away from people you hate.\n\nBut all your pride will fall aside\n\nWhen you’re hit by the escalade.",
                "previewImage": "http://undrian.com/break_index_files/bike.jpg",
                "images": [
                    "http://undrian.com/break_index_files/bike.jpg"
                ],
                "videoLink": "https://vimeo.com/252789863",
                "artworkId": 85,
                "lastArtworkId": null,
                "nextArtworkId": 86
            },
            {
                "order": -5,
                "id": "break_sandman",
                "name": "Sandman",
                "date": {
                    "year": 2012
                },
                "series": "Break",
                "seriesId": 7,
                "description": "Sandman, mixed media, 2012, figure about 4” tall\n\n(background video recorded at Cemex, Redwood City CA)",
                "body": "Mr. Sandman, send him a dream.\n\nA loaded lover, a loser alone,\n\nHigh on his tower, erratic roulette,\n\nIndustrial logic: alive and/or not.\n\n(Oh death, Oh death,\n\nWill you look as dark as another year?)\n\n\n\nPaddle wheel turns the weight of the sand,\n\nPivots the balance of the safety catch\n\nWhere the cam hollows for the firing pin\n\nThat pops under pressure and flips the chair back.\n\n(Oh death, Oh death,\n\nWill you feel as cold as another year?\n\nOh death, Oh death,\n\nWill you sound as quiet as another year?)\n\n\n\nMr. Sandman, put him to sleep,\n\nFinally ground down the aggregate stream,\n\nBefore he was born, a recycled shot,\n\nGently from the chamber, and back to the dust.\n\n(Oh death, Oh death,\n\nWill you last as long as another year?\n\nOh death, Oh death,\n\nWill you hurt as much as another year?)",
                "previewImage": "http://undrian.com/break_index_files/sandman.jpg",
                "images": [
                    "http://undrian.com/break_index_files/sandman.jpg"
                ],
                "videoLink": "https://vimeo.com/252797481",
                "artworkId": 86,
                "lastArtworkId": 85,
                "nextArtworkId": 87
            },
            {
                "order": -4,
                "id": "break_pylon",
                "name": "Pylon",
                "date": {
                    "year": 2012
                },
                "series": "Break",
                "seriesId": 7,
                "description": "PYLON, mixed media, 2012, figure about 4” tall\n\n(background video recorded in Altamont, CA)",
                "body": "You’re running and you’re hoping\n\n    that it’s making you fit.\n\nYou’re running and you’re wishing\n\n    that you’re losing some weight.\n\nYou’re running and pretending\n\n    that your chest doesn’t hurt.\n\nBut you can’t run away from your broken heart.\n\n\n\nYears you smoked a pack a day.\n\nNights you drank the pain away.\n\nPile on pounds of crap you ate.\n\nHow could you live without love till today?\n\n\n\nYou’re running and you’re running and\n\n    you’re running away...",
                "previewImage": "http://undrian.com/break_index_files/altamont.jpg",
                "images": [
                    "http://undrian.com/break_index_files/altamont.jpg"
                ],
                "videoLink": "https://vimeo.com/252797452",
                "artworkId": 87,
                "lastArtworkId": 86,
                "nextArtworkId": 88
            },
            {
                "order": -3,
                "id": "break_beam",
                "name": "Beam",
                "date": {
                    "year": 2012
                },
                "series": "Break",
                "seriesId": 7,
                "description": "Beam, mixed media, 2012, figure about 4” tall\n\n(background video recorded in Morgan Hill, CA)",
                "body": "Well, if Jesus had lived would he still build with wood,\n\nAn ex-con parolee finding work framing rough?\n\nLet the carpenter raise the cross beam high above\n\nThe bridegroom who spills life on the ground. Amen.\n\n\n\nThe walls of the temple are torn down to atone,\n\nThe posts of the prison break apart to release,\n\nThe beams of the suburb fall away to forgive\n\nBut the ladder of angels descends, again.",
                "previewImage": "http://undrian.com/break_index_files/house%202.jpg",
                "images": [
                    "http://undrian.com/break_index_files/house%202.jpg"
                ],
                "videoLink": "https://vimeo.com/252797292",
                "artworkId": 88,
                "lastArtworkId": 87,
                "nextArtworkId": 89
            },
            {
                "order": -2,
                "id": "break_fault",
                "name": "Fault",
                "date": {
                    "year": 2012
                },
                "series": "Break",
                "seriesId": 7,
                "description": "Fault, mixed media, 2012, figure about 4” tall\n\n(background video recorded on the San Andreas fault,\n\nLos Trancos Open Space Preserve, Palo Alto, CA)",
                "body": "Sleep above the lake of fire,\n\nOblivious the basic fault,\n\nRock a boy by milky hammock,\n\nOpen mouth two blind eyed sloth,\n\nSecond death cross over magma,\n\nRent the veil and swallow up.\n\nOh no…",
                "previewImage": "http://undrian.com/break_index_files/san%20adreas.jpg",
                "images": [
                    "http://undrian.com/break_index_files/san%20adreas.jpg"
                ],
                "videoLink": "https://vimeo.com/252797433",
                "artworkId": 89,
                "lastArtworkId": 88,
                "nextArtworkId": 90
            },
            {
                "order": -1,
                "id": "break_safe",
                "name": "Safe",
                "date": {
                    "year": 2010
                },
                "series": "Break",
                "seriesId": 7,
                "description": "This song is about the series but not about any particular object in the series.",
                "body": "In the machine they know god’s will,\n\nknow what to buy and when to sell,\n\nWho to ignore and who to jail,\n\nWait for rapture, leave you in hell.\n\n\n\nStay in the song, safe in the song,\n\nCan’t be right, can’t be wrong, in the song.\n\nStay in the song, safe in the song,\n\nThere’s no help, there’s no harm, in the song.\n\n\n\nA rampant cell, a hardened heart,\n\nA weakened vein, a vagrant clot,\n\nA burbling wheeze, gob in the throat,\n\nForgetful plaque, eager to rot.\n\n\n\nStay in the song, safe in the song,\n\nIt’s not cold, it’s not warm, in the song.\n\nStay in the song, safe in the song,\n\nNot yet dusk, not yet dawn, in the song.\n\n\n\nGun to the head, cord round the neck,\n\nLeap off the ledge, step on the track,\n\nBottle of pills, slit in the bath,\n\nHose in the car, swerve to the left.\n\n\n\nStay in the song, safe in the song,\n\nNothing short, nothing long, in the song.\n\nStay in the song, safe in the song,\n\nNever here, never gone, in the song.\n\n\n\nStay in the song, safe in the song,\n\nDon’t rebel, don’t belong, in the song.\n\nStay in the song, safe in the song,\n\nNot a soul, not alone, in the song.\n\n\n\nStay in the song, safe in the song,\n\nWake the dead, not a sound, in the song.\n\nStay in the song, safe in the song,\n\nDead and gone, on and on, in the song.",
                "previewImage": "http://undrian.com/break_index_files/toronto%20building.jpg",
                "images": [
                    "http://undrian.com/break_index_files/toronto%20building.jpg"
                ],
                "audioLink": "https://soundcloud.com/und-rian/safe1",
                "artworkId": 90,
                "lastArtworkId": 89,
                "nextArtworkId": null
            },
            {
                "order": 1,
                "id": "ps_sonos",
                "name": "sonos stand",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/01%20sonos.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/01%20sonos.JPG"
                ],
                "artworkId": 91,
                "lastArtworkId": null,
                "nextArtworkId": 92
            },
            {
                "order": 2,
                "id": "ps_coat_rack",
                "name": "coat rack",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/02%20coat%20rack.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/02%20coat%20rack.JPG"
                ],
                "artworkId": 92,
                "lastArtworkId": 91,
                "nextArtworkId": 93
            },
            {
                "order": 3,
                "id": "ps_contracture",
                "name": "contracture",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/03%20contracture.jpeg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/03%20contracture.jpeg"
                ],
                "artworkId": 93,
                "lastArtworkId": 92,
                "nextArtworkId": 94
            },
            {
                "order": 4,
                "id": "ps_stand-up",
                "name": "stand-up",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/04%20stand-up.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/04%20stand-up.jpg"
                ],
                "artworkId": 94,
                "lastArtworkId": 93,
                "nextArtworkId": 95
            },
            {
                "order": 5,
                "id": "ps_tympod",
                "name": "tympod",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/05%20tympod.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/05%20tympod.JPG"
                ],
                "artworkId": 95,
                "lastArtworkId": 94,
                "nextArtworkId": 96
            },
            {
                "order": 10,
                "id": "ps_bench",
                "name": "bench",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/10%20bench.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/10%20bench.JPG"
                ],
                "artworkId": 96,
                "lastArtworkId": 95,
                "nextArtworkId": 97
            },
            {
                "order": 12,
                "id": "ps_bench_underside",
                "name": "bench underside",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/12%20bench%20underside.jpeg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/12%20bench%20underside.jpeg"
                ],
                "artworkId": 97,
                "lastArtworkId": 96,
                "nextArtworkId": 98
            },
            {
                "order": 14,
                "id": "ps_stool_jig",
                "name": "stool jig",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/14%20stool%20jig.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/14%20stool%20jig.JPG"
                ],
                "artworkId": 98,
                "lastArtworkId": 97,
                "nextArtworkId": 99
            },
            {
                "order": 16,
                "id": "ps_dowel_jig",
                "name": "dowel jig",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/16%20dowel%20jig.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/16%20dowel%20jig.JPG"
                ],
                "artworkId": 99,
                "lastArtworkId": 98,
                "nextArtworkId": 100
            },
            {
                "order": 20,
                "id": "ps_stool1",
                "name": "stool1",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/20%20stool1.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/20%20stool1.JPG"
                ],
                "artworkId": 100,
                "lastArtworkId": 99,
                "nextArtworkId": 101
            },
            {
                "order": 22,
                "id": "ps_stool2",
                "name": "stool2",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/22%20stool2.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/22%20stool2.JPG"
                ],
                "artworkId": 101,
                "lastArtworkId": 100,
                "nextArtworkId": 102
            },
            {
                "order": 24,
                "id": "ps_stool3",
                "name": "stool3",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/24%20stool3.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/24%20stool3.JPG"
                ],
                "artworkId": 102,
                "lastArtworkId": 101,
                "nextArtworkId": 103
            },
            {
                "order": 27,
                "id": "ps_stool4_fail",
                "name": "stool4 fail",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/27%20stool4%20fail.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/27%20stool4%20fail.JPG"
                ],
                "artworkId": 103,
                "lastArtworkId": 102,
                "nextArtworkId": 104
            },
            {
                "order": 29,
                "id": "ps_stool4_fail",
                "name": "stool4 fail",
                "date": {
                    "year": 2018,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/29%20stool4.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/29%20stool4.JPG"
                ],
                "artworkId": 104,
                "lastArtworkId": 103,
                "nextArtworkId": 105
            },
            {
                "order": 30,
                "id": "ps_meconium",
                "name": "meconium",
                "date": {
                    "year": 2019,
                    "month": 2
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/30%20meconium.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/30%20meconium.JPG"
                ],
                "artworkId": 105,
                "lastArtworkId": 104,
                "nextArtworkId": 106
            },
            {
                "order": 32,
                "id": "ps_five_stools",
                "name": "five stools",
                "date": {
                    "year": 2019,
                    "month": 2
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/32%20five%20stools.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/32%20five%20stools.JPG"
                ],
                "artworkId": 106,
                "lastArtworkId": 105,
                "nextArtworkId": 107
            },
            {
                "order": 35,
                "id": "ps_tangy",
                "name": "tangy",
                "date": {
                    "year": 2019,
                    "month": 2
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/35%20tangy.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/35%20tangy.JPG"
                ],
                "artworkId": 107,
                "lastArtworkId": 106,
                "nextArtworkId": 108
            },
            {
                "order": 36,
                "id": "ps_tangy_rear",
                "name": "tangy rear",
                "date": {
                    "year": 2019,
                    "month": 2
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/36%20tangy%20rear.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/36%20tangy%20rear.JPG"
                ],
                "artworkId": 108,
                "lastArtworkId": 107,
                "nextArtworkId": 109
            },
            {
                "order": 38,
                "id": "ps_shelf",
                "name": "shelf",
                "date": {
                    "year": 2019,
                    "month": 2
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/38%20shelf.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/38%20shelf.JPG"
                ],
                "artworkId": 109,
                "lastArtworkId": 108,
                "nextArtworkId": 110
            },
            {
                "order": 40,
                "id": "ps_red_fish_blue_fish",
                "name": "red fish blue fish",
                "date": {
                    "year": 2019,
                    "month": 2
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/40%20red%20fish%20blue%20fish.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/40%20red%20fish%20blue%20fish.JPG"
                ],
                "artworkId": 110,
                "lastArtworkId": 109,
                "nextArtworkId": 111
            },
            {
                "order": 42,
                "id": "ps_birds",
                "name": "birds",
                "date": {
                    "year": 2019,
                    "month": 2
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/42%20birds.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/42%20birds.JPG"
                ],
                "artworkId": 111,
                "lastArtworkId": 110,
                "nextArtworkId": 112
            },
            {
                "order": 44,
                "id": "ps_caput",
                "name": "caput",
                "date": {
                    "year": 2019,
                    "month": 2
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/44%20caput.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/44%20caput.JPG"
                ],
                "artworkId": 112,
                "lastArtworkId": 111,
                "nextArtworkId": 113
            },
            {
                "order": 46,
                "id": "ps_mothra",
                "name": "mothra",
                "date": {
                    "year": 2019,
                    "month": 3
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/46%20mothra.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/46%20mothra.JPG"
                ],
                "artworkId": 113,
                "lastArtworkId": 112,
                "nextArtworkId": 114
            },
            {
                "order": 48,
                "id": "ps_hook",
                "name": "hook",
                "date": {
                    "year": 2019,
                    "month": 3
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/48%20hook.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/48%20hook.JPG"
                ],
                "artworkId": 114,
                "lastArtworkId": 113,
                "nextArtworkId": 115
            },
            {
                "order": 50,
                "id": "ps_greenwood",
                "name": "greenwood",
                "date": {
                    "year": 2019,
                    "month": 4
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/50%20greenwood.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/50%20greenwood.JPG"
                ],
                "artworkId": 115,
                "lastArtworkId": 114,
                "nextArtworkId": 116
            },
            {
                "order": 52,
                "id": "ps_bored&stroked",
                "name": "bored&stroked",
                "date": {
                    "year": 2019,
                    "month": 5
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/52%20bored%26stroked.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/52%20bored%26stroked.JPG"
                ],
                "artworkId": 116,
                "lastArtworkId": 115,
                "nextArtworkId": 117
            },
            {
                "order": 54,
                "id": "ps_skate",
                "name": "skate",
                "date": {
                    "year": 2019,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/54%20skate.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/54%20skate.JPG"
                ],
                "artworkId": 117,
                "lastArtworkId": 116,
                "nextArtworkId": 118
            },
            {
                "order": 72,
                "id": "ps_red_end_table",
                "name": "red end table",
                "date": {
                    "year": 2019,
                    "month": 10
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/72%20red%20end%20table.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/72%20red%20end%20table.JPG"
                ],
                "artworkId": 118,
                "lastArtworkId": 117,
                "nextArtworkId": 119
            },
            {
                "order": 74,
                "id": "ps_blue_end_table",
                "name": "blue end table",
                "date": {
                    "year": 2019,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/74%20blue%20end%20table.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/74%20blue%20end%20table.JPG"
                ],
                "artworkId": 119,
                "lastArtworkId": 118,
                "nextArtworkId": 120
            },
            {
                "order": 76,
                "id": "ps_coffee_table",
                "name": "coffee table",
                "date": {
                    "year": 2019,
                    "month": 10
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/76%20coffee%20table.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/76%20coffee%20table.JPG"
                ],
                "artworkId": 120,
                "lastArtworkId": 119,
                "nextArtworkId": 121
            },
            {
                "order": 80,
                "id": "ps_wet_dream",
                "name": "wet dream",
                "date": {
                    "year": 2019,
                    "month": 11
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/80%20wet%20dream.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/80%20wet%20dream.JPG"
                ],
                "artworkId": 121,
                "lastArtworkId": 120,
                "nextArtworkId": 122
            },
            {
                "order": 82,
                "id": "ps_saw_wood",
                "name": "saw wood",
                "date": {
                    "year": 2019,
                    "month": 11
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/82%20saw%20wood.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/82%20saw%20wood.JPG"
                ],
                "artworkId": 122,
                "lastArtworkId": 121,
                "nextArtworkId": 123
            },
            {
                "order": 84,
                "id": "ps_glade_night_table",
                "name": "glade night table",
                "date": {
                    "year": 2019,
                    "month": 11
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/84%20glade%20night%20table.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/84%20glade%20night%20table.JPG"
                ],
                "artworkId": 123,
                "lastArtworkId": 122,
                "nextArtworkId": 124
            },
            {
                "order": 86,
                "id": "ps_sticks_and_stones",
                "name": "sticks and stones",
                "date": {
                    "year": 2019,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/86%20sticks%20and%20stones.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/86%20sticks%20and%20stones.JPG"
                ],
                "artworkId": 124,
                "lastArtworkId": 123,
                "nextArtworkId": 125
            },
            {
                "order": 90,
                "id": "ps_clenching_hands",
                "name": "clenching hands",
                "date": {
                    "year": 2019,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/90%20clenching%20hands.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/90%20clenching%20hands.JPG"
                ],
                "artworkId": 125,
                "lastArtworkId": 124,
                "nextArtworkId": 126
            },
            {
                "order": 92,
                "id": "ps_obelisk",
                "name": "obelisk",
                "date": {
                    "year": 2020,
                    "month": 1
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/92%20obelisk.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/92%20obelisk.JPG"
                ],
                "artworkId": 126,
                "lastArtworkId": 125,
                "nextArtworkId": 127
            },
            {
                "order": 94,
                "id": "ps_rooted",
                "name": "rooted",
                "date": {
                    "year": 2020,
                    "month": 1
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/94%20rooted.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/94%20rooted.JPG"
                ],
                "artworkId": 127,
                "lastArtworkId": 126,
                "nextArtworkId": 128
            },
            {
                "order": 96,
                "id": "ps_sistine",
                "name": "sistine",
                "date": {
                    "year": 2020,
                    "month": 2
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/96%20sistine.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/96%20sistine.JPG"
                ],
                "artworkId": 128,
                "lastArtworkId": 127,
                "nextArtworkId": 129
            },
            {
                "order": 98,
                "id": "ps_curved_bookcase_stairs_foyer",
                "name": "curved bookcase stairs foyer",
                "date": {
                    "year": 2020,
                    "month": 4
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/98%20curved%20bookcase%20stairs%20foyer.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/98%20curved%20bookcase%20stairs%20foyer.JPG"
                ],
                "artworkId": 129,
                "lastArtworkId": 128,
                "nextArtworkId": 130
            },
            {
                "order": 100,
                "id": "ps_closet_rod",
                "name": "closet rod",
                "date": {
                    "year": 2020,
                    "month": 4
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/100%20closet%20rod.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/100%20closet%20rod.jpg"
                ],
                "artworkId": 130,
                "lastArtworkId": 129,
                "nextArtworkId": 131
            },
            {
                "order": 102,
                "id": "ps_hornet_nest_2",
                "name": "hornet nest 2",
                "date": {
                    "year": 2020,
                    "month": 5
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/102%20hornet%20nest%202.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/102%20hornet%20nest%202.JPG"
                ],
                "artworkId": 131,
                "lastArtworkId": 130,
                "nextArtworkId": 132
            },
            {
                "order": 104,
                "id": "ps_blake",
                "name": "blake",
                "date": {
                    "year": 2020,
                    "month": 6
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/104%20blake.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/104%20blake.jpg"
                ],
                "artworkId": 132,
                "lastArtworkId": 131,
                "nextArtworkId": 133
            },
            {
                "order": 106,
                "id": "ps_bleech",
                "name": "bleech",
                "date": {
                    "year": 2020,
                    "month": 7
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/106_beech.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/106_beech.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/106_beech2.jpg"
                ],
                "pdfLink": "https://storage.googleapis.com/undrian-artwork-hub/106%20beech.pdf",
                "artworkId": 133,
                "lastArtworkId": 132,
                "nextArtworkId": 134
            },
            {
                "order": 108,
                "id": "ps_pentangle",
                "name": "pentangle",
                "date": {
                    "year": 2020,
                    "month": 7
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/108_pentangle.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/108_pentangle.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/108_pentangle2.jpg"
                ],
                "pdfLink": "https://storage.googleapis.com/undrian-artwork-hub/108%20pentangle.pdf",
                "artworkId": 134,
                "lastArtworkId": 133,
                "nextArtworkId": 135
            },
            {
                "order": 110,
                "id": "ps_entrangle",
                "name": "entrangle",
                "date": {
                    "year": 2020,
                    "month": 7
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/110_entangle.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/110_entangle2.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/110_entangle3.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/110_entangle4.jpg"
                ],
                "pdfLink": "https://storage.googleapis.com/undrian-artwork-hub/110%20entangle.pdf",
                "artworkId": 135,
                "lastArtworkId": 134,
                "nextArtworkId": 136
            },
            {
                "order": 112,
                "id": "ps_loonwolf",
                "name": "loonwolf",
                "date": {
                    "year": 2020,
                    "month": 7
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/112_lonewolf.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/112_lonewolf.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/112_lonewolf2.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/112_lonewolf3.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/112_lonewolf4.jpg"
                ],
                "pdfLink": "https://storage.googleapis.com/undrian-artwork-hub/112%20loonwolf.pdf",
                "artworkId": 136,
                "lastArtworkId": 135,
                "nextArtworkId": 137
            },
            {
                "order": 114,
                "id": "ps_cavex",
                "name": "cavex",
                "date": {
                    "year": 2020,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/114_cavex_1.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/114_cavex_1.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/114_cavex_off1.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/114_cavex_2.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/114_cavex_off2.jpg"
                ],
                "pdfLink": "https://storage.googleapis.com/undrian-artwork-hub/114%20cavex.pdf",
                "artworkId": 137,
                "lastArtworkId": 136,
                "nextArtworkId": 138
            },
            {
                "order": 116,
                "id": "ps_rounty",
                "name": "rounty",
                "date": {
                    "year": 2020,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/116_rounty.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/116_rounty.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/116_rounty_off.jpg"
                ],
                "pdfLink": "https://storage.googleapis.com/undrian-artwork-hub/116%20rounty.pdf",
                "artworkId": 138,
                "lastArtworkId": 137,
                "nextArtworkId": 139
            },
            {
                "order": 118,
                "id": "ps_oak_garland",
                "name": "oak garland",
                "date": {
                    "year": 2020,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/118%20oak%20garland.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/118%20oak%20garland.jpg"
                ],
                "artworkId": 139,
                "lastArtworkId": 138,
                "nextArtworkId": 140
            },
            {
                "order": 120,
                "id": "ps_mirror_with_sconce",
                "name": "mirror with sconce",
                "date": {
                    "year": 2020,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/120%20mirror%20with%20sconce.png",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/120%20mirror%20with%20sconce.png"
                ],
                "artworkId": 140,
                "lastArtworkId": 139,
                "nextArtworkId": 141
            },
            {
                "order": 122,
                "id": "ps_thumbs",
                "name": "thumbs",
                "date": {
                    "year": 2020,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/122%20thumbs.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/122%20thumbs.jpg"
                ],
                "artworkId": 141,
                "lastArtworkId": 140,
                "nextArtworkId": 142
            },
            {
                "order": 124,
                "id": "ps_takostar_xmas",
                "name": "takostar xmas",
                "date": {
                    "year": 2020,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/124%20takostar%20xmas.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/124%20takostar%20xmas.jpg"
                ],
                "artworkId": 142,
                "lastArtworkId": 141,
                "nextArtworkId": 143
            },
            {
                "order": 125,
                "id": "ps_takostar",
                "name": "takostar",
                "date": {
                    "year": 2020,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/125%20takostar.gif",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/125%20takostar.gif"
                ],
                "artworkId": 143,
                "lastArtworkId": 142,
                "nextArtworkId": 144
            },
            {
                "order": 126,
                "id": "ps_alewives",
                "name": "alewives",
                "date": {
                    "year": 2020,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/126%20alewives.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/126%20alewives.jpg"
                ],
                "artworkId": 144,
                "lastArtworkId": 143,
                "nextArtworkId": 145
            },
            {
                "order": 128,
                "id": "ps_corner_bath",
                "name": "corner bath",
                "date": {
                    "year": 2021,
                    "month": 1
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/128_corner_bath.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/128_corner_bath.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/128_corner_bath_off.jpg"
                ],
                "pdfLink": "https://storage.googleapis.com/undrian-artwork-hub/128%20corner%20bath.pdf",
                "artworkId": 145,
                "lastArtworkId": 144,
                "nextArtworkId": 146
            },
            {
                "order": 130,
                "id": "ps_threescore",
                "name": "threescore",
                "date": {
                    "year": 2021,
                    "month": 3
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/130_threescore_all.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/130_threescore_all.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/130_threescore_close1.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/130_threescore_close2.jpg"
                ],
                "pdfLink": "https://storage.googleapis.com/undrian-artwork-hub/130%20threescore.pdf",
                "artworkId": 146,
                "lastArtworkId": 145,
                "nextArtworkId": 147
            },
            {
                "order": 132,
                "id": "ps_mini-chairification",
                "name": "mini-chairification",
                "date": {
                    "year": 2021,
                    "month": 3
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/132_mini_charification.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/132_mini_charification.jpg"
                ],
                "videoLink": "https://storage.googleapis.com/undrian-artwork-hub/132%20mini-chairfiction.M4V",
                "artworkId": 147,
                "lastArtworkId": 146,
                "nextArtworkId": 148
            },
            {
                "order": 134,
                "id": "ps_MBA_mirror",
                "name": "MBA mirror",
                "date": {
                    "year": 2021,
                    "month": 4
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/134%20MBA%20mirror.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/134%20MBA%20mirror.JPG"
                ],
                "artworkId": 148,
                "lastArtworkId": 147,
                "nextArtworkId": 149
            },
            {
                "order": 136,
                "id": "ps_irony_bored",
                "name": "irony bored",
                "date": {
                    "year": 2021,
                    "month": 5
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/136%20irony%20bored.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/136%20irony%20bored.JPG"
                ],
                "artworkId": 149,
                "lastArtworkId": 148,
                "nextArtworkId": 150
            },
            {
                "order": 138,
                "id": "138_1978",
                "name": 1978,
                "date": {
                    "year": 2021,
                    "month": 5
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/138%201978.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/138%201978.JPG"
                ],
                "artworkId": 150,
                "lastArtworkId": 149,
                "nextArtworkId": 151
            },
            {
                "order": 140,
                "id": "ps_1185",
                "name": 1185,
                "date": {
                    "year": 2021,
                    "month": 6
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/140%201185.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/140%201185.JPG"
                ],
                "artworkId": 151,
                "lastArtworkId": 150,
                "nextArtworkId": 152
            },
            {
                "order": 142,
                "id": "ps_shade_darden_bench",
                "name": "shade darden bench",
                "date": {
                    "year": 2021,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/142%20shade%20garden%20bench.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/142%20shade%20garden%20bench.JPG"
                ],
                "artworkId": 152,
                "lastArtworkId": 151,
                "nextArtworkId": 153
            },
            {
                "order": 144,
                "id": "ps_bestiary_for_Rate_Li",
                "name": "bestiary for Rate Li",
                "date": {
                    "year": 2021,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/144_beastiary_thumbnail.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/144_beastiary_all.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/144_beastiary_tower1.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/144_beastiary_tower2.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/144_beastiary_tower3.jpg",
                    "https://storage.googleapis.com/undrian-artwork-hub/144_beastiary_thumbnail.jpg"
                ],
                "pdfLink": "https://storage.googleapis.com/undrian-artwork-hub/144%20bestiary%20for%20Renate%20Li.pdf",
                "artworkId": 153,
                "lastArtworkId": 152,
                "nextArtworkId": 154
            },
            {
                "order": 146,
                "id": "ps_KCMO",
                "name": "KCMO",
                "date": {
                    "year": 2021,
                    "month": 9
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/146%20KCMO.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/146%20KCMO.JPG"
                ],
                "artworkId": 154,
                "lastArtworkId": 153,
                "nextArtworkId": 155
            },
            {
                "order": 148,
                "id": "ps_mix_n_match",
                "name": "mix_n_match",
                "date": {
                    "year": 2021,
                    "month": 10
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/148%20mix_n_match.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/148%20mix_n_match.JPG"
                ],
                "artworkId": 155,
                "lastArtworkId": 154,
                "nextArtworkId": 156
            },
            {
                "order": 150,
                "id": "ps_front_hallway_door",
                "name": "front hallway door",
                "date": {
                    "year": 2021,
                    "month": 10
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/150%20front%20hallway%20door.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/150%20front%20hallway%20door.JPG"
                ],
                "artworkId": 156,
                "lastArtworkId": 155,
                "nextArtworkId": 157
            },
            {
                "order": 152,
                "id": "ps_audience",
                "name": "audience",
                "date": {
                    "year": 2021,
                    "month": 11
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/152%20audience.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/152%20audience.JPG"
                ],
                "artworkId": 157,
                "lastArtworkId": 156,
                "nextArtworkId": 158
            },
            {
                "order": 154,
                "id": "ps_foyer_dining_room_doors",
                "name": "foyer dining room doors",
                "date": {
                    "year": 2021,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/154%20foyer%20dining%20room%20doors%20.JPG",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/154%20foyer%20dining%20room%20doors%20.JPG"
                ],
                "artworkId": 158,
                "lastArtworkId": 157,
                "nextArtworkId": 159
            },
            {
                "order": 156,
                "id": "ps_casco_screen",
                "name": "casco screen",
                "date": {
                    "year": 2022,
                    "month": 3
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/156%20casco%20screen.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/156%20casco%20screen.jpg"
                ],
                "artworkId": 159,
                "lastArtworkId": 158,
                "nextArtworkId": 160
            },
            {
                "order": 158,
                "id": "ps_lake_life",
                "name": "lake life",
                "date": {
                    "year": 2022,
                    "month": 3
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/158%20lake%20life.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/158%20lake%20life.jpg"
                ],
                "artworkId": 160,
                "lastArtworkId": 159,
                "nextArtworkId": 161
            },
            {
                "order": 160,
                "id": "ps_leggies_4_wiggles",
                "name": "leggies 4 wiggles",
                "date": {
                    "year": 2022,
                    "month": 4
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/160%20leggies%204%20wiggles.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/160%20leggies%204%20wiggles.jpg"
                ],
                "artworkId": 161,
                "lastArtworkId": 160,
                "nextArtworkId": 162
            },
            {
                "order": 162,
                "id": "ps_dog_park_shadolier",
                "name": "dog park shadolier",
                "date": {
                    "year": 2022,
                    "month": 4
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/162%20dog%20park%20shadolier.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/162%20dog%20park%20shadolier.jpg"
                ],
                "artworkId": 162,
                "lastArtworkId": 161,
                "nextArtworkId": 163
            },
            {
                "order": 164,
                "id": "ps_booth",
                "name": "booth",
                "date": {
                    "year": 2022,
                    "month": 4
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/164%20booth.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/164%20booth.jpg"
                ],
                "artworkId": 163,
                "lastArtworkId": 162,
                "nextArtworkId": 164
            },
            {
                "order": 166,
                "id": "ps_leggie_13_and_lion_4_leo",
                "name": "leggie 13 and lion 4 leo",
                "date": {
                    "year": 2022,
                    "month": 4
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/166%20leggie%2013%20lion%204%20leo%20.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/166%20leggie%2013%20lion%204%20leo%20.jpg"
                ],
                "artworkId": 164,
                "lastArtworkId": 163,
                "nextArtworkId": 165
            },
            {
                "order": 168,
                "id": "ps_compost_bin",
                "name": "compost bin",
                "date": {
                    "year": 2022,
                    "month": 6
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/168%20compost%20bin.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/168%20compost%20bin.jpg"
                ],
                "artworkId": 165,
                "lastArtworkId": 164,
                "nextArtworkId": 166
            },
            {
                "order": 170,
                "id": "ps_ca-y2k",
                "name": "ca-y2k",
                "date": {
                    "year": 2022,
                    "month": 6
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/170%20ca-y2k.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/170%20ca-y2k.jpg"
                ],
                "artworkId": 166,
                "lastArtworkId": 165,
                "nextArtworkId": 167
            },
            {
                "order": 172,
                "id": "ps_handrail",
                "name": "handrail",
                "date": {
                    "year": 2022,
                    "month": 6
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/172%20handrail.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/172%20handrail.jpg"
                ],
                "artworkId": 167,
                "lastArtworkId": 166,
                "nextArtworkId": 168
            },
            {
                "order": 174,
                "id": "ps_shop_door_overhang",
                "name": "shop door overhang",
                "date": {
                    "year": 2022,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/174%20shop%20door%20overhang.png",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/174%20shop%20door%20overhang.png"
                ],
                "artworkId": 168,
                "lastArtworkId": 167,
                "nextArtworkId": 169
            },
            {
                "order": 176,
                "id": "ps_p_s&q_s",
                "name": "p_s&q_s",
                "date": {
                    "year": 2022,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/176%20p_s%26q_s.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/176%20p_s%26q_s.jpg"
                ],
                "artworkId": 169,
                "lastArtworkId": 168,
                "nextArtworkId": 170
            },
            {
                "order": 178,
                "id": "ps_night_table",
                "name": "night table",
                "date": {
                    "year": 2022,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/178%20night%20table.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/178%20night%20table.jpg"
                ],
                "artworkId": 170,
                "lastArtworkId": 169,
                "nextArtworkId": 171
            },
            {
                "order": 180,
                "id": "ps_handles",
                "name": "handles",
                "date": {
                    "year": 2022,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/180%20handles.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/180%20handles.jpg"
                ],
                "artworkId": 171,
                "lastArtworkId": 170,
                "nextArtworkId": 172
            },
            {
                "order": 182,
                "id": "ps_high_chair_for_leo",
                "name": "high chair for leo",
                "date": {
                    "year": 2022,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/182%20high%20chair%20for%20Leo.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/182%20high%20chair%20for%20Leo.jpg"
                ],
                "artworkId": 172,
                "lastArtworkId": 171,
                "nextArtworkId": 173
            },
            {
                "order": 185,
                "id": "ps_green_snake",
                "name": "green snake",
                "date": {
                    "year": 2022,
                    "month": 8
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/185%20green%20snake.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/185%20green%20snake.jpg"
                ],
                "artworkId": 173,
                "lastArtworkId": 172,
                "nextArtworkId": 174
            },
            {
                "order": 186,
                "id": "ps_babygate",
                "name": "babygate",
                "date": {
                    "year": 2022,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/186%20babygate.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/186%20babygate.jpg"
                ],
                "artworkId": 174,
                "lastArtworkId": 173,
                "nextArtworkId": 175
            },
            {
                "order": 188,
                "id": "ps_holie_of_holies",
                "name": "holie of holies",
                "date": {
                    "year": 2022,
                    "month": 12
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/188%20holie%20of%20holies.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/188%20holie%20of%20holies.jpg"
                ],
                "artworkId": 175,
                "lastArtworkId": 174,
                "nextArtworkId": 176
            },
            {
                "order": 190,
                "id": "ps_children_s_rhyme",
                "name": "children_s rhyme",
                "date": {
                    "year": 2023,
                    "month": 3
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/190%20children_s%20rhyme.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/190%20children_s%20rhyme.jpg"
                ],
                "artworkId": 176,
                "lastArtworkId": 175,
                "nextArtworkId": 177
            },
            {
                "order": 192,
                "id": "ps_tikitako",
                "name": "tikitako",
                "date": {
                    "year": 2023,
                    "month": 7
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/192%20tikitako.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/192%20tikitako.jpg"
                ],
                "artworkId": 177,
                "lastArtworkId": 176,
                "nextArtworkId": 178
            },
            {
                "order": 194,
                "id": "ps_bayfront_9_year_anniversary",
                "name": "bayfront 9 year anniversary",
                "date": {
                    "year": 2023,
                    "month": 10
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/194%20bayfront%209%20year%20anniversary.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/194%20bayfront%209%20year%20anniversary.jpg"
                ],
                "artworkId": 178,
                "lastArtworkId": 177,
                "nextArtworkId": 179
            },
            {
                "order": 196,
                "id": "ps_stepstool",
                "name": "stepstool",
                "date": {
                    "year": 2023,
                    "month": 10
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/196%20stepstool.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/196%20stepstool.jpg"
                ],
                "artworkId": 179,
                "lastArtworkId": 178,
                "nextArtworkId": 180
            },
            {
                "order": 198,
                "id": "ps_fallow",
                "name": "fallow",
                "date": {
                    "year": 2023,
                    "month": 11
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/198%20fallow.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/198%20fallow.jpg"
                ],
                "artworkId": 180,
                "lastArtworkId": 179,
                "nextArtworkId": 181
            },
            {
                "order": 200,
                "id": "ps_bathroom_pendant_light_shade",
                "name": "bathroom pendant light shade",
                "date": {
                    "year": 2023,
                    "month": 11
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/200%20bathroom%20pendant%20light%20shades.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/200%20bathroom%20pendant%20light%20shades.jpg"
                ],
                "artworkId": 181,
                "lastArtworkId": 180,
                "nextArtworkId": 182
            },
            {
                "order": 202,
                "id": "ps_elementable_mandala",
                "name": "elementable mandala",
                "date": {
                    "year": 2024,
                    "month": 3
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/202%20elementable%20mandala.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/202%20elementable%20mandala.jpg"
                ],
                "artworkId": 182,
                "lastArtworkId": 181,
                "nextArtworkId": 183
            },
            {
                "order": 204,
                "id": "ps_elementable_in_situ",
                "name": "elementable in situ",
                "date": {
                    "year": 2024,
                    "month": 7
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/204%20elementable%20in%20situ.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/204%20elementable%20in%20situ.jpg"
                ],
                "artworkId": 183,
                "lastArtworkId": 182,
                "nextArtworkId": 184
            },
            {
                "order": 206,
                "id": "ps_backsplash_&_pendants",
                "name": "backsplash & pendants",
                "date": {
                    "year": 2024,
                    "month": 7
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/206%20backsplash%20%26%20pendants.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/206%20backsplash%20%26%20pendants.jpg"
                ],
                "artworkId": 184,
                "lastArtworkId": 183,
                "nextArtworkId": 185
            },
            {
                "order": 208,
                "id": "ps_splashback_&_loon_sconce",
                "name": "splashback & loon sconce",
                "date": {
                    "year": 2024,
                    "month": 7
                },
                "series": "New Work",
                "seriesId": 8,
                "previewImage": "https://storage.googleapis.com/undrian-artwork-hub/208%20splashback%20%26%20loon%20sconce.jpg",
                "images": [
                    "https://storage.googleapis.com/undrian-artwork-hub/208%20splashback%20%26%20loon%20sconce.jpg"
                ],
                "artworkId": 185,
                "lastArtworkId": 184,
                "nextArtworkId": null
            }
        ]
    }

    return (
        <div>
            {/*<div style={{aspectRatio:"1", maxHeight: "100vh", maxWidth: "100vw", margin: "0 auto"}}>*/}
            <Gallery galleryData={galleryData}/>
            {/*</div>*/}
        </div>
    );
}
