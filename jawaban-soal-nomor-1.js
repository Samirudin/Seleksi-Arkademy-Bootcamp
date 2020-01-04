var biodataSaya = {
	name: "Samirudin",
	age: 22,
	address: "Desa Liya Togo, Kec. Wangi-Wangi Selatan, Kab. Wakatobi, Prov. Sulawesi Tenggara",
	hobbies: ["Diving", "Main Bola"],
	isMarried: false,
	listSchool: [
		{
			highSchool: "SMA Negeri 4 Wangi-Wangi",
			yearIn: 2012,
			yearOt:2015,
			major: "IPA"
		},
		{
			universitas: "Universitas Halu Oleo",
			yearIn: 2015,
			yearOt: 2019,
			major: "Biologi"
		}
	],
	skilss: [
		{
			skillName: "CSS dan HTML",
			level: "advanced"
		},
		{
			skillName: "JavaScript",
			level: "beginner"
		}
	],
	interestInCoding: true,
	toJson : function() {
        return JSON.stringify(biodataSaya);
    }
}

console.log(biodataSaya.toJson());