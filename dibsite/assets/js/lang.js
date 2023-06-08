// language
let date = new Date();
let expire_time = date.setDate(date.getDate() + 1);

function setCookie(cname, cvalue, expire_time) {
	let expires = "expires="+expire_time;
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	console.log(document.cookie);
};
function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

let data = {
	en: {
		nav_about:"About",
		nav_benefit:"Benefit",
		nav_facility:"Facility",
		nav_services:"Services",
		nav_contact:"Contact",
		hero_title: "Digital Innovation & Business Hub",
		hero_p: "A place to create and collaborate ideas to be  sustainable businesses.",
		hero_btn: "About Us",
		about_title: "Digital Innovation & Business Hub",
		about_p: "Dibsite is a designed place to create comfortable, productive, and collaborative workspaces for various communities, inovators, content creators, digital creative entities or entrepreneurs in Bandung.",
		about_btn: "Contact Us",
		benefit_container_text: "Benefit",
		benefit_title: "Why choosing us?",
		benefit_p_card1: "It is located in a strategic elite area in Bandung, supported by easy access for them who live in the city or out of the city.",
		benefit_p_card2: "Alternative workspaces are available in various capacities which is suitable for private office, coworking, meeting room, classroom and function room.",
		benefit_p_card3: "An open working area, podcast studio, photo/ video studio, lounge room are available as well.",
		benefit_p_card4: "We provide sufficient internet connection which is easily access the international journals. Printer and scanner are also provided.",
		benefit_p_card5: "Other supporting facilities are reception room, large parking area, mushala, separate toilet and restroom for men and women, corner cafe.",
		facility_container_text: "Facility",
		facility_title: "Alternative Workspaces and Dacilities",
		facility_card1_title: "Private Office",
		facility_card1_p: "Workspace in various sizes are provided for 2 to 19 people.",
		facility_card2_title: "Coworking Space",
		facility_card2_p: "A room which is shared with others. It is semi private office cubical for 12 people to keep privacy convenience. It is completed with lockers.",
		facility_card3_title: "Meeting/Class Room",
		facility_card3_p: "It could be used for either meeting room or classroom. It is for 2 to 18 people.",
		facility_card4_title: "Function Room",
		facility_card4_p: "It could be used for either  classroom or seminar room. It is for about 70 people.",
		facility_card5_title: "Virtual Office",
		facility_card5_p: "Provide a credible and professional office address for business need completed with correspondence service, the use of meeting room and coworking.",
		facility_card6_title: "Online Meeting Room",
		facility_card6_p: "A soundproof online meeting room is available for the privacy convenience during the meeting.",
		//facility_card7_title: "PodCast Studio",
		//facility_card7_p: "A recording room which is for the making of digital content.",
		facility_card8_title: "Photo Studio",
		facility_card8_p: "The studio is completed with good quality lighting and various screens.",
		services_container_text: "Services",
		services_title: "Our Service",
		services_card1_title: "Talent HUB",
		services_card1_p: "It is a collaboration room for communities, incubators, brands, content creators, digital creative entities, and entrepreneurs inside or outside Bandung.",
		services_card2_title: "Talent Hunt",
		services_card2_p: "We help you to search digital talents to fullfil application development.",
		services_card3_title: "Manage Services",
		services_card3_p: "Engineering team would be provided to help the business development continuity.",
		services_card4_title: "Software Product Development",
		services_card4_p: "We give you a service either to develop web profile, web business or application of mobile business product which is designed well and in line with the business need.",
		services_card5_title: "Event Organizing",
		services_card5_p: "We organize events, workshops, seminars, communities and F&B.",
		cta_title: "Success Stories",
		cta_p: "With more than 4 years of experience in application development, our portfolio together with TELKOM and other private companies in application development is said to be very successful.",
		cta_btn: "Contact Us",
	},
	id: {
		nav_about:"Tentang",
		nav_benefit:"Benefit",
		nav_facility:"Fasilitas",
		nav_services:"Layanan",
		nav_contact:"Kontak",
		hero_title: "Digital Innovation & Business Hub",
		hero_p: "A place to create and collaborate ideas to be  sustainable businesses.",
		hero_btn: "Tentang Kami",
		about_title: "Digital Innovation & Business Hub",
		about_p: "Dibsite adalah ruang yang dirancang untuk menciptakan lingkungan kerja yang nyaman, produktif dan kolaboratif bagi berbagai komunitas, inovator, konten creator, entitas kreatif digital maupun pelaku bisnis di Kota Bandung.",
		about_btn: "Hubungi Kami",
		benefit_container_text: "Benefit",
		benefit_title: "Kenapa Memilih Kami?",
		benefit_p_card1: "Lokasi berada dikawasan elit yang strategis di Kota Bandung sehingga memudahkan akses baik bagi pengguna dalam kota maupun yang berasal dari luar kota.",
		benefit_p_card2: "Pilihan ruang dengan berbagai kapasitas, berupa privat office , coworking, meeting room, class room dan function room.",
		benefit_p_card3: "Terdapat fasilitas area kerja terbuka, Podcast studio, Foto/video studio, Lounge room.",
		benefit_p_card4: "Tersedia jaringan internet yang memadai dan mempunya akses langsung ke jurnal_jurnal internasional, printer scanner bersama.",
		benefit_p_card5: "Fasilitas pendukung lainnya seperti layanan resepsionis, area parkir luas, mushola, toilet dan kamar mandi pria dan wanita yang terpisah, café corner.",
		facility_container_text: "Facility",
		facility_title: "Pilihan Ruangan dan Fasilitas",
		facility_card1_title: "Private Office",
		facility_card1_p: "Ruang kerja dengan beberapa pilihan ukuran ruangan yang berkapasitas mulai dari 2 hingga 19 orang.",
		facility_card2_title: "Coworking Space",
		facility_card2_p: "Ruang yang ditempati secara bersama dengan meja semi cubical dengan kapasitas sampai dengan 12 orang. Setiap meja memiliki sekat untuk menjaga kenyamanan dan privasi. Ruangan ini juga dilengkapi fasilitas loker.",
		facility_card3_title: "Meeting/Class Room",
		facility_card3_p: "Ruangan yang dapat digunakan sebagai meeting room ataupun class room berkapasitas  untuk 2 – 18 orang.",
		facility_card4_title: "Function Room",
		facility_card4_p: "Ruang serbaguna yang dapat juga digunakan untuk ruang kelas berkapasitas 45 orang atau seminar berkapasitas 70 orang.",
		facility_card5_title: "Virtual Office",
		facility_card5_p: "Menyediakan alamat kantor yang kredibel dan profesional untuk kebutuhan bisnis. Dapat di lengkapi berbagai layanan lain seperti layanan surat menyurat,  penggunaan ruang meeting & coworking.",
		facility_card6_title: "Online Meeting Room",
		facility_card6_p: "Ruang meeting online yang didesign kedap suara bertujuan untuk menjaga privasi pada saat meeting online.",
		//facility_card7_title: "PodCast Studio",
		//facility_card7_p: "Ruang rekaman asli audio atau video yang dapat digunakan utuk kebutuhan pembuatan konten digital.",
		facility_card8_title: "Photo Studio",
		facility_card8_p: "Studio Foto dan video yang dilengkapi dengan lighting yang berkualitas serta berbagai pilihan screen.",
		services_container_text: "Services",
		services_title: "Layanan Kami",
		services_card1_title: "Talent HUB",
		services_card1_p: "Ruang kolaborasi antar komunitas, inkubator, brand, konten kreator dan entitas kreatif digital dan pelaku bisnis di dalam maupun luar Kota Bandung.",
		services_card2_title: "Talent Hunt",
		services_card2_p: "Membantu Anda yang membutuhkan talenta digital untuk kebutuhan pengembangan aplikasi.",
		services_card3_title: "Manage Services",
		services_card3_p: "Memberikan layanan berupa tim engineer untuk membantu keberlangsungan pengembangan bisnis.",
		services_card4_title: "Software Product Development",
		services_card4_p: "Memberikan layanan untuk membangun web profile, web bisnis, maupun produk aplikasi mobile bisnis sesuai kebutuhan dengan design dan performa yang baik dan terjaga.",
		services_card5_title: "Event Organizing",
		services_card5_p: "Layanan mengelola sebuah event, workshop, seminar, komunitas dan F&B.",
		cta_title: "Success Stories",
		cta_p: "Dengan pengalaman lebih dari 4 tahun dalam pengembangan aplikasi, portofolio kami bersama dengan TELKOM dan perusahaan swasta lainnya dalam pengembangan aplikasi dibilang sangat sukses.",
		cta_btn: "Kontak Kami",
	}
};

function translate(konten) {
	document.querySelector("[data_key='nav_about']").innerHTML = konten.nav_about;
	document.querySelector("[data_key='nav_benefit']").innerHTML = konten.nav_benefit;
	document.querySelector("[data_key='nav_facility']").innerHTML = konten.nav_facility;
	document.querySelector("[data_key='nav_services']").innerHTML = konten.nav_services;
	document.querySelector("[data_key='nav_contact']").innerHTML = konten.nav_contact;
	document.querySelector("[data_key='hero_title']").innerHTML = konten.hero_title;
	document.querySelector("[data_key='hero_p']").innerHTML = konten.hero_p;
	document.querySelector("[data_key='hero_btn']").innerHTML = konten.hero_btn;
	document.querySelector("[data_key='about_title']").innerHTML = konten.about_title;
	document.querySelector("[data_key='about_p']").innerHTML = konten.about_p;
	document.querySelector("[data_key='about_btn']").innerHTML = konten.about_btn;
	document.querySelector("[data_key='benefit_container_text']").innerHTML = konten.benefit_container_text;
	document.querySelector("[data_key='benefit_title']").innerHTML = konten.benefit_title;
	document.querySelector("[data_key='benefit_p_card1']").innerHTML = konten.benefit_p_card1;
	document.querySelector("[data_key='benefit_p_card2']").innerHTML = konten.benefit_p_card2;
	document.querySelector("[data_key='benefit_p_card3']").innerHTML = konten.benefit_p_card3;
	document.querySelector("[data_key='benefit_p_card4']").innerHTML = konten.benefit_p_card4;
	document.querySelector("[data_key='benefit_p_card5']").innerHTML = konten.benefit_p_card5;
	document.querySelector("[data_key='facility_container_text']").innerHTML = konten.facility_container_text;
	document.querySelector("[data_key='facility_title']").innerHTML = konten.facility_title;
	document.querySelector("[data_key='facility_card1_title']").innerHTML = konten.facility_card1_title;
	document.querySelector("[data_key='facility_card1_p']").innerHTML = konten.facility_card1_p;
	document.querySelector("[data_key='facility_card2_title']").innerHTML = konten.facility_card2_title;
	document.querySelector("[data_key='facility_card2_p']").innerHTML = konten.facility_card2_p;
	document.querySelector("[data_key='facility_card3_title']").innerHTML = konten.facility_card3_title;
	document.querySelector("[data_key='facility_card3_p']").innerHTML = konten.facility_card3_p;
	document.querySelector("[data_key='facility_card4_title']").innerHTML = konten.facility_card4_title;
	document.querySelector("[data_key='facility_card4_p']").innerHTML = konten.facility_card4_p;
	document.querySelector("[data_key='facility_card5_title']").innerHTML = konten.facility_card5_title;
	document.querySelector("[data_key='facility_card5_p']").innerHTML = konten.facility_card5_p;
	document.querySelector("[data_key='facility_card6_title']").innerHTML = konten.facility_card6_title;
	document.querySelector("[data_key='facility_card6_p']").innerHTML = konten.facility_card6_p;
	//document.querySelector("[data_key='facility_card7_title']").innerHTML = konten.facility_card7_title;
	//document.querySelector("[data_key='facility_card7_p']").innerHTML = konten.facility_card7_p;
	document.querySelector("[data_key='facility_card8_title']").innerHTML = konten.facility_card8_title;
	document.querySelector("[data_key='facility_card8_p']").innerHTML = konten.facility_card8_p;
	document.querySelector("[data_key='services_container_text']").innerHTML = konten.services_container_text;
	document.querySelector("[data_key='services_title']").innerHTML = konten.services_title;
	document.querySelector("[data_key='services_card1_title']").innerHTML = konten.services_card1_title;
	document.querySelector("[data_key='services_card1_p']").innerHTML = konten.services_card1_p;
	document.querySelector("[data_key='services_card2_title']").innerHTML = konten.services_card2_title;
	document.querySelector("[data_key='services_card2_p']").innerHTML = konten.services_card2_p;
	document.querySelector("[data_key='services_card3_title']").innerHTML = konten.services_card3_title;
	document.querySelector("[data_key='services_card3_p']").innerHTML = konten.services_card3_p;
	document.querySelector("[data_key='services_card4_title']").innerHTML = konten.services_card4_title;
	document.querySelector("[data_key='services_card4_p']").innerHTML = konten.services_card4_p;
	document.querySelector("[data_key='services_card5_title']").innerHTML = konten.services_card5_title;
	document.querySelector("[data_key='services_card5_p']").innerHTML = konten.services_card5_p;
	document.querySelector("[data_key='cta_title']").innerHTML = konten.cta_title;
	document.querySelector("[data_key='cta_p']").innerHTML = konten.cta_p;
	document.querySelector("[data_key='cta_btn']").innerHTML = konten.cta_btn;
}

if (!document.cookie) {
	let lang = document.documentElement.lang;
	setCookie("lang", lang, expire_time);
}
if (getCookie("lang") == "id") {
	translate(data.id);
}
function setLang(lang) {
	let konten;
	document.documentElement.lang = lang
	setCookie("lang", lang, expire_time);
	if (getCookie("lang") == "id") {
		konten = data.id;
	} else {
		konten = data.en;
	}
	translate(konten);
}

document.getElementById("en").addEventListener("click", () => setLang("en"));
document.getElementById("id").addEventListener("click", () => setLang("id"));