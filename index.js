$(document).ready(function () {

    var config = {
        'servername': "ALONEV ROLEPLAY",
        'link': "discord.gg/alonev",
        'soundname': "Muzik",
        'soundval': 0.50,

        'haberler': [
            { img: 'img/haber/photo2.png', title: 'Haber 1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
            { img: '', title: 'Resimsiz haber', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
            { img: 'img/haber/photo1.jpg', title: 'Haber 2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
            { img: '', title: 'Resimsiz haber', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
            { img: 'img/haber/photo2.png', title: 'Haber 3', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, minus impedit corporis dolores totam?' },
        ],

        'kurallar': [
            {
                title: "IC/OOC KURALLAR",
				
                text: [
                    { txt: "1.1 Özelden yapılan konuşmalar yetkili ekibini ilgilendirmemektedir." },
                    { txt: "1.2 Discord ses ve metin kanallarında; hakaret, küfür vb. durumlar kesinlikle yasaktır." },
                    { txt: "1.3 Din,dil ve ırk ayrımı yapmak yasaktır." },
					{ txt: "1.4 Sunucumuzda başka bir sunucunun reklamının yapılması yasaktır." },
					{ txt: "1.5 Ticketlarda olan üsluplarınız düzgün olmalıdır, ticketlarda saygısızca konuşmak yasaktır." },
					{ txt: "1.6 Discord yazı kanallarında triggerlayıcı-hakaret edici paylaşımlar yapan kişiler uyarı veya ban cezasına çarptırılacaktır." },
					{ txt: "1.7 istek-öneri kanalı amacı dışında kullanılmamalıdır. Sadece sunucuda istediğiniz özellikleri belirtmeniz gerekmektedir."},
					{ txt: "1.8 Sistemlerin geliştirilmesiyle ortaya çıkabilecek açık/bug durumlarından yararlanmaya çalışmak kesinlikle yasaktır."},
					{ txt: "1.9 Kişinin sadece üzerinde olan eşyaları alınabilir. Motelden eşya alınması, bankasından para çekmesi istenemez."},
					{ txt: "2.0 Güvenli bölgelerde, aktif rollerde (Lapd, chp, otel önü vb) illegal bir gerekçeyle (rag vb.) maske takmak kesinlikle yasaktır. Maskeli dolaşan kişi/kişileri LAPD şüpheli sıfatı ile gözaltına alma hakkına sahiptir. "},
					{ txt: "2.1 LSPD kendisine sebepsiz sıkan kişileri CK’lama hakkına sahiptir."},
					{ txt: "2.2 LSPD Bodycamini kırdığınızda, kırılan ana kadar olan olay örgüsü PD’nin bulut sistemine kaydedilmiş olur. Kırdıktan sonraki olayı bilemezler. "},
					{ txt: "2.3 Pit demiri olmayan araçlarla pit atmak yasaktır. (NON-RP Driving kapsamında uyarısı değerlendirilecektir.)"},
					{ txt: "2.4 Sunucuya girdiğiniz anda kuralları okuduğunuz varsayılarak işlem uygulancaktır"},
					{ txt: "2.5 Diğer kuralları okumak için discordumuzda sunucu kuralları bölümüne göz atınız."},
					
                ]
            },
        ],

        'iletişim': [
            { img: 'img/iletisim/said.jpg', dcname: 'The.sad#4335', level: 'Founder', desc: '' },
            { img: 'img/iletisim/efe.jpg', dcname: 'Çunter#0001', level: 'Co-Founder', desc: '' },
            { img: 'img/iletisim/sahra.gif', dcname: 'ѕαняα#2508', level: 'Co-Founder', desc: '' },
            { img: 'img/iletisim/red.jpg', dcname: '! T_T_RanyuM#6889', level: 'Co-Founder', desc: '' },
            { img: 'img/iletisim/a_cbc692bcf065563e1c1bcf33d02eda88.png', dcname: '! InFlames#6666', level: 'Developer', desc: '' },
        ]

    }

    $("ol").on("click", function () {
        var acilacak = $(this).attr("title");
        let buol = $(this)
        if ($(this).hasClass("header-menu-selected")) {
            console.log("zaaten bunda")
        }
        else {
            $(".inside-panel").each(function () {
                if ($(this).css("display") == "block") {
                    $(this).hide();
                }
            });
            $("#" + acilacak).show();
            $(".header-menu-selected").removeClass("header-menu-selected")
            $(this).addClass("header-menu-selected")
        }
    });

    mediumZoom('.loverimg', {
        margin: 50,
        background: '#000',
    });

    var vid = document.getElementById("leson");

    vid.volume = config['soundval']

    $('#sesval').on('input', function () {
        console.log($(this).val() / 100)
        vid.volume = $(this).val() / 100
    });

    function RefreshConfig() {
        $("h3").text(config['servername'])
        $("h1").text(config['servername'])
        $("h2").text(config['link'])
        $(".audiotxt").text(config['soundname'])

        // TÜM HABERLERİ EKLER

        for (var i = 0; i < Object.keys(config['haberler']).length; i++) {
            if (config['haberler'][i].img == '') {
                haberekle('<div class="news-without-image"><h5>' + config['haberler'][i].title + '</h5> <br><br><br><span class="under-title">' + config['haberler'][i].desc + '</span></div>')
            }
            else {
                resimhaberekle('<div class="news-with-image"><img class="news-image" src="' + config['haberler'][i].img + '"><h5>' + config['haberler'][i].title + '</h5> <br><br><br><span class="under-title">' + config['haberler'][i].desc + '</span></div>')
            }
        }

        // TÜM HABERLERİ EKLER



        // TÜM KURALLARI EKLER

        for (var i = 0; i < Object.keys(config['kurallar']).length; i++) {
            var yapiliyor = '<h6>' + config['kurallar'][i].title + '</h6>'
            for (var v = 0; v < Object.keys(config['kurallar'][i].text).length; v++) {
                yapiliyor = yapiliyor + '<span class="under-title">' + config['kurallar'][i].text[v].txt + '</span>'
            }
            kuralekle(yapiliyor)
        }

        // TÜM KURALLARI EKLER



        // TÜM İLETİŞİMLERİ EKLER

        for (var i = 0; i < Object.keys(config['iletişim']).length; i++) {
            iletisimekle('<div class="kadro-uye-holder"><img class="uye-logo" src="' + config['iletişim'][i].img + '"><div class="uye-dc-name">' + config['iletişim'][i].dcname + '</div><div class="uye-dc-yetki">' + config['iletişim'][i].level + '</div> <br><span class="uye-mesaj">' + config['iletişim'][i].desc + '</span></div>')
        }

        // TÜM İLETİŞİMLERİ EKLER

    }

    function resimhaberekle(kod) {
        $(".left-news-div").html($.parseHTML($(".left-news-div").html() + kod))
    }

    function haberekle(kod) {
        $(".left-news-div").html($.parseHTML($(".left-news-div").html() + kod))
    }

    function kuralekle(kod) {
        $(".left-rules-div").html($.parseHTML($(".left-rules-div").html() + kod))
    }

    function iletisimekle(kod) {
        $(".left-uye-div").html($.parseHTML($(".left-uye-div").html() + kod))
    }

    RefreshConfig()

    let mouseCursor = document.querySelector(".cursor");

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    }

});