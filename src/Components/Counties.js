import React from 'react' ;
let counties = new Array("Baringo",
"Bomet",
"Bungoma",
"Busia",
"Elgeyo-Marakwet",
"Embu",
"Garissa",
"Homa-Bay",
"Isiolo",
"Kajiado",
"Kakamega",
"Kericho",
"Kiambu",
"Kilifi",
"Kirinyaga",
"Kisii",
"Kisumu",
"Kitui",
"Kwale",
"Laikipia",
"Lamu",
"Machakos",
"Makueni",
"Mandera",
"Marsabit",
"Meru",
"Migori",
"Mombasa",
"Murang'a",
"Nairobi",
"Nakuru",
"Nandi",
"Narok",
"Nyamira",
"Nyandarua",
"Nyeri",
"Samburu",
"Siaya",
"Taita Taveta",
"Tana River",
"Tharaka-Nithi",
"Trans Nzoia",
"Turkana",
" Uasin Gishu",
"Vihiga",
"Wajir",
"West Pokot");


let cities = [];
cities[0] = "";
cities[1] = " Baringo | Karbarne | Eldama Ravine | Marigat | Mogotio | Karbartonjo | Chemolingot | Tangulbei ";
cities[2] = " Bomet |Sotik | Longisa | Mulot";
cities[3] = " Bungoma | Elgon | Sirisia| Tongaren | Webuye";
cities[4] = " Andungosi | Busia | Bumala | Lake Victoria | Malaba | Nambale";
cities[5] = " ";
cities[6] = " Embu | Siakago | Runyenjes";
cities[7] = " Garissa | Ijara | Dadaab | Lagdera ";
cities[8] = " ";
cities[9] = " Isiolo | Garbatulla | Modogashe | kinna | merti";
cities[10] = "Kajiado | Ongata Rongai | Kitengela | Ngong";
cities[11] = " Kakamega | Mumias";
cities[12] = " Kericho |  Litein | Londian";
cities[13] = " Kiambu | Thika | juja";
cities[14] = " Kilifi | malindi";
cities[15] = " Kerugoya | Sagana | Kagio | Kagumo";
cities[16] = " Kisii | Ogembo | Suneka | Marani | Tabaka | Nyacheki";
cities[17] = " Kisumu | Maseno | Ahero | Chemelil | Awasi | Muhoroni";
cities[18] = " Kitui | Mwingi | Mbitini | Kabati | Kyuso | Mutito"
cities[19] = " ";
cities[20] = " Nanyuki | Nyahururu";
cities[21] = " Lamu";
cities[22] = " Machakos | Masinga | Kangundo | Mwala | Yattta";
cities[23] = " Makueni |Kibwezi | Mbooni | Kilungu";
cities[24] = " Mandera | Elwak | Lafey  | Banissa";
cities[25] = " Moyale | Sololo ";
cities[26] = " Meru | Nkubu | Laare | Timau | Maua";
cities[27] = " Migori | Kehancha | Rongo | Awendo | Isebania";
cities[28] = " Mombasa | Changamwe | Likoni | Kisauni";
cities[29] = " Murang'a | Kangare | Kirwara | kenol | Maragwa | Kangema | Kiriani";
cities[30] = " Nairobi";
cities[31] = " Naivasha | Molo | Gilgil | Maai Mahiu | Subukia |Salgaa | Narok";
cities[32] = " Mosoriot | Tinderet | Kobujoi | Kaiboi | Kabiyet | Nandi";
cities[33] = " Narok | Kilgoris";
cities[34] = " Nyamira | Nyansiongo | Keroka";
cities[35] = " Kinangop | Ndaragwa | Kipipiri";
cities[36] = " Nyeri | Mathira | Othaya | Tetu";
cities[37] = " Maralal | Baragoi | Archers Post | South Horr | Wamba | Lodosoit | Kisima";
cities[38] = " ";
cities[39] = " Voi | Tavea | Mwatate | Wundanyi";
cities[40] = " Balguda | Baomo | Baymo | Bokoni | Bongonoko | Boronini";
cities[41] = " Kathwana | Chuka | Chogoria";
cities[42] = " Kitale | Trans Nzoia";
cities[43] = " Lodwar";
cities[44] = " Matunda | Burnt Forest | Jua Kali | Turbo";
cities[45] = " Luanda | Maseno | Chavakali | Mudete | Malengo | Mbale | Serem";
cities[46] = " Wajir | Buna | Eldas | Tarbaj";
cities[47] = " West Pokot | Kapenguria";

export const getCities=(county)=>{
  const index= counties.indexOf(county)

  let cities_arr = cities[index+1].split('|')
  return cities_arr 
}

function county(county_id) {
    var option_str = document.getElementById(county_id);
    option_str.length = 0;
    option_str.options[0] = new Option("Enter county", "");
    option_str.selectedIndex = 0;
    for (var i = 0; i < counties.length; i++) {
      option_str.options[option_str.length] = new Option(
        counties[i],
        counties[i]
      );
    }
  }
  
  function city(city_id, city_index) {
    var option_str = document.getElementById(city_id);
    option_str.length = 0; // Fixed by Julian Woods
    option_str.options[0] = new Option("Select City", "");
    option_str.selectedIndex = 0;
    var city_arr = cities[city_index].split("|");
    for (var i = 0; i < city_arr.length; i++) {
      option_str.options[option_str.length] = new Option(
        city_arr[i],
        city_arr[i]
      );
    }
  }
