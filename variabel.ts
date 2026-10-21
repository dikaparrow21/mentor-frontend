// 1. Tipe data teks (string)
let namaSaya: string;
namaSaya= "Apa kek";

// 2. Tipe data angka (number)
let umur: number;
umur= 19;

// 3. Tipe data boolean (true/false)
let isLife: boolean = true;

console.log("Nama: ", namaSaya);
console.log("Umur: ", umur);
console.log("Apakah hidup: ", isLife);

// 4. Array (Menyimpan banyak data sejenis)
let person: string[] = ["Mohammad", "Andhika", "Radea"];
console.log("Daftar nama:", person);


// 5. Tuple (Daftar dengan tipe data beda tapi urutannya tetap)
let user: [string, number] = ["Dika", 88];
console.log("Data User:", user);

// 6. Any (Menembus aturan / bebas)
let random: any = 25;
console.log("Nilai awal (angka):", random);

random = "Berubah jadi teks!";
console.log("Nilai berubah:", random);