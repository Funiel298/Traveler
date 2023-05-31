export default function GetAllItems(id){
  const data = [
    {
      "name": "Afghanistan",
      "code": "AF",
      "capital": "Kabul",
      "region": "AS",
      "currency": {
        "code": "AFN",
        "name": "Afghan afghani", 
        "symbol": "؋"
      },
      "language": {
        "code": "ps",
        "name": "Pashto"
      },
      
      "dialling_code": "+93",
      "isoCode": "004"
    },
    {
      "name": "Albania",
      "code": "AL",
      "capital": "Tirana",
      "region": "EU",
      "currency": {
        "code": "ALL",
        "name": "Albanian lek",
        "symbol": "L"
      },
      "language": {
        "code": "sq",
        "name": "Albanian"
      },
      
      "dialling_code": "+355",
      "isoCode": "008"
    },
    {
      "name": "Algeria",
      "code": "DZ",
      "capital": "Algiers",
      "region": "AF",
      "currency": {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+213",
      "isoCode": "012"
    },
    {
      "name": "American Samoa",
      "code": "AS",
      "capital": "Pago Pago",
      "region": "OC",
      "currency": {
        "code": "USD",
        "name": "United State Dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "016"
    },
    {
      "name": "Andorra",
      "code": "AD",
      "capital": "Andorra la Vella",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "ca",
        "name": "Catalan"
      },
      
      "dialling_code": "+376",
      "isoCode": "020"
    },
    {
      "name": "Angola",
      "code": "AO",
      "capital": "Luanda",
      "region": "AF",
      "currency": {
        "code": "AOA",
        "name": "Angolan kwanza",
        "symbol": "Kz"
      },
      "language": {
        "code": "pt",
        "name": "Portuguese"
      },
      
      "dialling_code": "+244",
      "isoCode": "024"
    },
    {
      "name": "Anguilla",
      "code": "AI",
      "capital": "The Valley",
      "region": "NA",
      "currency": {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+43",
      "isoCode": "660"
    },
    {
      "name": "Antigua and Barbuda",
      "code": "AG",
      "capital": "Saint John's",
      "region": "NA",
      "currency": {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "028"
    },
    {
      "name": "Argentina",
      "code": "AR",
      "capital": "Buenos Aires",
      "region": "SA",
      'image':'https://images.unsplash.com/photo-1617548437735-92d875423353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      "currency": {
        "code": "ARS",
        "name": "Argentine peso",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+54",
      "isoCode": "032"
    },
    {
      "name": "Armenia",
      "code": "AM",
      "capital": "Yerevan",
      "region": "AS",
      "currency": {
        "code": "AMD",
        "name": "Armenian dram",
        "symbol": null
      },
      "language": {
        "code": "hy",
        "name": "Armenian"
      },
      
      "dialling_code": "+374",
      "isoCode": "051"
    },
    {
      "name": "Aruba",
      "code": "AW",
      "capital": "Oranjestad",
      "region": "SA",
      "currency": {
        "code": "AWG",
        "name": "Aruban florin",
        "symbol": "ƒ"
      },
      "language": {
        "code": "nl",
        "name": "Dutch"
      },
      
      "dialling_code": "+297",
      "isoCode": "533"
    },
    {
      "name": "Australia",
      "code": "AU",
      "capital": "Canberra",
      "region": "OC",
      "currency": {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+61",
      "isoCode": "036"
    },
    {
      "name": "Azerbaijan",
      "code": "AZ",
      "capital": "Baku",
      "region": "AS",
      "currency": {
        "code": "AZN",
        "name": "Azerbaijani manat",
        "symbol": null
      },
      "language": {
        "code": "az",
        "name": "Azerbaijani"
      },
      
      "dialling_code": "+994",
      "isoCode": "031"
    },
    {
      "name": "Bahamas",
      "code": "BS",
      "capital": "Nassau",
      "region": "NA",
      "currency": {
        "code": "BSD",
        "name": "Bahamian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "044"
    },
    {
      "name": "Bahrain",
      "code": "BH",
      "capital": "Manama",
      "region": "AS",
      "currency": {
        "code": "BHD",
        "name": "Bahraini dinar",
        "symbol": ".د.ب"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+973",
      "isoCode": "048"
    },
    {
      "name": "Bangladesh",
      "code": "BD",
      "capital": "Dhaka",
      "region": "AS",
      "currency": {
        "code": "BDT",
        "name": "Bangladeshi taka",
        "symbol": "৳"
      },
      "language": {
        "code": "bn",
        "name": "Bengali"
      },
      
      "dialling_code": "+880",
      "isoCode": "050"
    },
    {
      "name": "Barbados",
      "code": "BB",
      "capital": "Bridgetown",
      "region": "NA",
      "currency": {
        "code": "BBD",
        "name": "Barbadian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "052"
    },
    {
      "name": "Belarus",
      "code": "BY",
      "capital": "Minsk",
      "region": "EU",
      'image': 'https://images.unsplash.com/photo-1597986728524-76be10541f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      "currency": {
        "code": "BYN",
        "name": "New Belarusian ruble",
        "symbol": "Br"
      },
      "language": {
        "code": "be",
        "name": "Belarusian"
      },
      
      "dialling_code": "+375",
      "isoCode": "112"
    },
    {
      "name": "Belgium",
      "code": "BE",
      "capital": "Brussels",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "nl",
        "name": "Dutch"
      },
      
      "dialling_code": "+32",
      "isoCode": "056"
    },
    {
      "name": "Belize",
      "code": "BZ",
      "capital": "Belmopan",
      "region": "NA",
      "currency": {
        "code": "BZD",
        "name": "Belize dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+501",
      "isoCode": "084"
    },
    {
      "name": "Benin",
      "code": "BJ",
      "capital": "Porto-Novo",
      "region": "AF",
      "currency": {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+229",
      "isoCode": "204"
    },
    {
      "name": "Bermuda",
      "code": "BM",
      "capital": "Hamilton",
      "region": "NA",
      "currency": {
        "code": "BMD",
        "name": "Bermudian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "060"
    },
    {
      "name": "Bhutan",
      "code": "BT",
      "capital": "Thimphu",
      "region": "AS",
      "currency": {
        "code": "BTN",
        "name": "Bhutanese ngultrum",
        "symbol": "Nu."
      },
      "language": {
        "code": "dz",
        "name": "Dzongkha"
      },
      
      "dialling_code": "+975",
      "isoCode": "064"
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "code": "BO",
      "capital": "Sucre",
      "region": "SA",
      "currency": {
        "code": "BOB",
        "name": "Bolivian boliviano",
        "symbol": "Bs."
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+591",
      "isoCode": "068"
    },
    {
      "name": "Bosnia and Herzegovina",
      "code": "BA",
      "capital": "Sarajevo",
      "region": "EU",
      "currency": {
        "code": "BAM",
        "name": "Bosnia and Herzegovina convertible mark",
        "symbol": null
      },
      "language": {
        "code": "bs",
        "name": "Bosnian"
      },
      
      "dialling_code": "+387",
      "isoCode": "070"
    },
    {
      "name": "Botswana",
      "code": "BW",
      "capital": "Gaborone",
      "region": "AF",
      "currency": {
        "code": "BWP",
        "name": "Botswana pula",
        "symbol": "P"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+267",
      "isoCode": "072"
    },
    {
      "name": "Brazil",
      "code": "BR",
      "capital": "Brasília",
      "region": "SA",
      'image':'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      "currency": {
        "code": "BRL",
        "name": "Brazilian real",
        "symbol": "R$"
      },
      "language": {
        "code": "pt",
        "name": "Portuguese"
      },
      
      "dialling_code": "+55",
      "isoCode": "076"
    },
    {
      "name": "British Indian Ocean Territory",
      "code": "IO",
      "capital": "Diego Garcia",
      "region": "AF",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+246",
      "isoCode": "086"
    },
    {
      "name": "Virgin Islands (British)",
      "code": "VG",
      "capital": "Road Town",
      "region": "NA",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "092"
    },
    {
      "name": "Virgin Islands (U.S.)",
      "code": "VI",
      "capital": "Charlotte Amalie",
      "region": "NA",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "850"
    },
    {
      "name": "Brunei Darussalam",
      "code": "BN",
      "capital": "Bandar Seri Begawan",
      "region": "AS",
      "currency": {
        "code": "BND",
        "name": "Brunei dollar",
        "symbol": "$"
      },
      "language": {
        "code": "ms",
        "name": "Malay"
      },
      
      "dialling_code": "+673",
      "isoCode": "096"
    },
    {
      "name": "Bulgaria",
      "code": "BG",
      "capital": "Sofia",
      "region": "EU",
      "currency": {
        "code": "BGN",
        "name": "Bulgarian lev",
        "symbol": "лв"
      },
      "language": {
        "code": "bg",
        "name": "Bulgarian"
      },
      
      "dialling_code": "+359",
      "isoCode": "100"
    },
    {
      "name": "Burkina Faso",
      "code": "BF",
      "capital": "Ouagadougou",
      "region": "AF",
      "currency": {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+226",
      "isoCode": "854"
    },
    {
      "name": "Burundi",
      "code": "BI",
      "capital": "Bujumbura",
      "region": "AF",
      "currency": {
        "code": "BIF",
        "name": "Burundian franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+257",
      "isoCode": "108"
    },
    {
      "name": "Cambodia",
      "code": "KH",
      "capital": "Phnom Penh",
      "region": "AS",
      "currency": {
        "code": "KHR",
        "name": "Cambodian riel",
        "symbol": "៛"
      },
      "language": {
        "code": "km",
        "name": "Khmer"
      },
      
      "dialling_code": "+855",
      "isoCode": "116"
    },
    {
      "name": "Cameroon",
      "code": "CM",
      "capital": "Yaoundé",
      "region": "AF",
      "currency": {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+237",
      "isoCode": "120"
    },
    {
      "name": "Canada",
      "code": "CA",
      "capital": "Ottawa",
      "region": "NA",
      "currency": {
        "code": "CAD",
        "name": "Canadian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "124"
    },
    {
      "name": "Cabo Verde",
      "code": "CV",
      "capital": "Praia",
      "region": "AF",
      "currency": {
        "code": "CVE",
        "name": "Cape Verdean escudo",
        "symbol": "Esc"
      },
      "language": {
        "code": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      },
      
      "dialling_code": "+238",
      "isoCode": "132"
    },
    {
      "name": "Cayman Islands",
      "code": "KY",
      "capital": "George Town",
      "region": "NA",
      "demonym": "Caymanian",
      "currency": {
        "code": "KYD",
        "name": "Cayman Islands dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "136"
    },
    {
      "name": "Central African Republic",
      "code": "CF",
      "capital": "Bangui",
      "region": "AF",
      "currency": {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+236",
      "isoCode": "140"
    },
    {
      "name": "Central African Republic",
      "code": "CF",
      "capital": "Bangui",
      "region": "AF",
      "currency": {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+236",
      "isoCode": "140"
    },
    {
      "name": "Chile",
      "code": "CL",
      "capital": "Santiago",
      "region": "SA",
      "currency": {
        "code": "CLP",
        "name": "Chilean peso",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      },
      
      "dialling_code": "+56",
      "isoCode": "152"
    },
    {
      "name": "China",
      "code": "CN",
      "capital": "Beijing",
      "region": "AS",
      'image':'https://images.unsplash.com/photo-1522759154455-c5caabe9ba02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1124&q=80',
      "currency": {
        "code": "CNY",
        "name": "Chinese yuan",
        "symbol": "¥"
      },
      "language": {
        "code": "zh",
        "name": "Chinese"
      },
      
      "dialling_code": "+86",
      "isoCode": "156"
    },
    {
      "name": "Colombia",
      "code": "CO",
      "capital": "Bogotá",
      "region": "SA",
      "currency": {
        "code": "COP",
        "name": "Colombian peso",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+57",
      "isoCode": "170"
    },
    {
      "name": "Comoros",
      "code": "KM",
      "capital": "Moroni",
      "region": "AF",
      "currency": {
        "code": "KMF",
        "name": "Comorian franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+269",
      "isoCode": "174"
    },
    {
      "name": "Congo",
      "code": "CG",
      "capital": "Brazzaville",
      "region": "AF",
      "currency": {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+242",
      "isoCode": "178"
    },
    {
      "name": "Congo (Democratic Republic of the)",
      "code": "CD",
      "capital": "Kinshasa",
      "region": "AF",
      "currency": {
        "code": "CDF",
        "name": "Congolese franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+243",
      "isoCode": "180"
    },
    {
      "name": "Cook Islands",
      "code": "CK",
      "capital": "Avarua",
      "region": "OC",
      "currency": {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+682",
      "isoCode": "184"
    },
    {
      "name": "Costa Rica",
      "code": "CR",
      "capital": "San José",
      "region": "NA",
      "currency": {
        "code": "CRC",
        "name": "Costa Rican colón",
        "symbol": "₡"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+506",
      "isoCode": "188"
    },
    {
      "name": "Croatia",
      "code": "HR",
      "capital": "Zagreb",
      "region": "EU",
      "currency": {
        "code": "HRK",
        "name": "Croatian kuna",
        "symbol": "kn"
      },
      "language": {
        "code": "hr",
        "name": "Croatian"
      },
      
      "dialling_code": "+385",
      "isoCode": "191"
    },
    {
      "name": "Cuba",
      "code": "CU",
      "capital": "Havana",
      "region": "NA",
      "currency": {
        "code": "CUC",
        "name": "Cuban convertible peso",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+53",
      "isoCode": "192"
    },
    {
      "name": "Cuba",
      "code": "CU",
      "capital": "Havana",
      "region": "NA",
      "currency": {
        "code": "CUC",
        "name": "Cuban convertible peso",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+53",
      "isoCode": "192"
    },
    {
      "name": "Cyprus",
      "code": "CY",
      "capital": "Nicosia",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "tr",
        "name": "Turkish"
      },
      
      "dialling_code": "+357",
      "isoCode": "196"
    },
    {
      "name": "Czech Republic",
      "code": "CZ",
      "capital": "Prague",
      "region": "EU",
      "currency": {
        "code": "CZK",
        "name": "Czech koruna",
        "symbol": "Kč"
      },
      "language": {
        "code": "cs",
        "name": "Czech"
      },
      
      "dialling_code": "+420",
      "isoCode": "203"
    },
    {
      "name": "Denmark",
      "code": "DK",
      "capital": "Copenhagen",
      "region": "EU",
      "currency": {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      },
      "language": {
        "code": "da",
        "name": "Danish"
      },
      
      "dialling_code": "+45",
      "isoCode": "208"
    },
    {
      "name": "Djibouti",
      "code": "DJ",
      "capital": "Djibouti",
      "region": "AF",
      "currency": {
        "code": "DJF",
        "name": "Djiboutian franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+253",
      "isoCode": "262"
    },
    {
      "name": "Dominica",
      "code": "DM",
      "capital": "Roseau",
      "region": "NA",
      "currency": {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "212"
    },
    {
      "name": "Dominican Republic",
      "code": "DO",
      "capital": "Santo Domingo",
      "region": "NA",
      "currency": {
        "code": "DOP",
        "name": "Dominican peso",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+1",
      "isoCode": "214"
    },
    {
      "name": "Ecuador",
      "code": "EC",
      "capital": "Quito",
      "region": "SA",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+593",
      "isoCode": "218"
    },
    {
      "name": "Egypt",
      "code": "EG",
      "capital": "Cairo",
      "region": "AF",
      "currency": {
        "code": "EGP",
        "name": "Egyptian pound",
        "symbol": "£"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+20",
      "isoCode": "818"
    },
    {
      "name": "El Salvador",
      "code": "SV",
      "capital": "San Salvador",
      "region": "NA",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+503",
      "isoCode": "222"
    },
    {
      "name": "Equatorial Guinea",
      "code": "GQ",
      "capital": "Malabo",
      "region": "AF",
      "currency": {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      },
      
      "dialling_code": "+240",
      "isoCode": "226"
    },
    {
      "name": "Eritrea",
      "code": "ER",
      "capital": "Asmara",
      "region": "AF",
      "currency": {
        "code": "ERN",
        "name": "Eritrean nakfa",
        "symbol": "Nfk"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+291",
      "isoCode": "232"
    },
    {
      "name": "Estonia",
      "code": "EE",
      "capital": "Tallinn",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "et",
        "name": "Estonian"
      },
      
      "dialling_code": "+372",
      "isoCode": "233"
    },
    {
      "name": "Ethiopia",
      "code": "ET",
      "capital": "Addis Ababa",
      "region": "AF",
      "currency": {
        "code": "ETB",
        "name": "Ethiopian birr",
        "symbol": "Br"
      },
      "language": {
        "code": "am",
        "name": "Amharic"
      },
      
      "dialling_code": "+251",
      "isoCode": "231"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "code": "FK",
      "capital": "Stanley",
      "region": "SA",
      "currency": {
        "code": "FKP",
        "name": "Falkland Islands pound",
        "symbol": "£"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+500",
      "isoCode": "238"
    },
    {
      "name": "Faroe Islands",
      "code": "FO",
      "capital": "Tórshavn",
      "region": "EU",
      "currency": {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      },
      "language": {
        "code": "fo",
        "name": "Faroese"
      },
      
      "dialling_code": "+298",
      "isoCode": "234"
    },
    {
      "name": "Fiji",
      "code": "FJ",
      "capital": "Suva",
      "region": "OC",
      "currency": {
        "code": "FJD",
        "name": "Fijian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+679",
      "isoCode": "242"
    },
    {
      "name": "Finland",
      "code": "FI",
      "capital": "Helsinki",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fi",
        "iso639_2": "fin",
        "name": "Finnish",
        "nativeName": "suomi"
      },
      
      "dialling_code": "+358",
      "isoCode": "246"
    },
    {
      "name": "France",
      "code": "FR",
      "capital": "Paris",
      "region": "EU",
      "demonym": "French",
      'image': 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJhbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+33",
      "isoCode": "250"
    },
    {
      "name": "French Guiana",
      "code": "GF",
      "capital": "Cayenne",
      "region": "SA",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+594",
      "isoCode": "254"
    },
    {
      "name": "French Polynesia",
      "code": "PF",
      "capital": "Papeetē",
      "region": "OC",
      "currency": {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+689",
      "isoCode": "258"
    },
    {
      "name": "Gabon",
      "code": "GA",
      "capital": "Libreville",
      "region": "AF",
      "currency": {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+241",
      "isoCode": "266"
    },
    {
      "name": "Gambia",
      "code": "GM",
      "capital": "Banjul",
      "region": "AF",
      "currency": {
        "code": "GMD",
        "name": "Gambian dalasi",
        "symbol": "D"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+220",
      "isoCode": "270"
    },
    {
      "name": "Georgia",
      "code": "GE",
      "capital": "Tbilisi",
      "region": "AS",
      "currency": {
        "code": "GEL",
        "name": "Georgian Lari",
        "symbol": "ლ"
      },
      "language": {
        "code": "ka",
        "name": "Georgian"
      },
      
      "dialling_code": "+995",
      "isoCode": "268"
    },
    {
      "name": "Germany",
      "code": "DE",
      "capital": "Berlin",
      "region": "EU",
      'image':'https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80',
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "de",
        "name": "German"
      },
      
      "dialling_code": "+49",
      "isoCode": "276"
    },
    {
      "name": "Ghana",
      "code": "GH",
      "capital": "Accra",
      "region": "AF",
      "currency": {
        "code": "GHS",
        "name": "Ghanaian cedi",
        "symbol": "₵"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+233",
      "isoCode": "288"
    },
    {
      "name": "Gibraltar",
      "code": "GI",
      "capital": "Gibraltar",
      "region": "EU",
      "currency": {
        "code": "GIP",
        "name": "Gibraltar pound",
        "symbol": "£"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+350",
      "isoCode": "292"
    },
    {
      "name": "Greece",
      "code": "GR",
      "capital": "Athens",
      "region": "EU",
      'image':"https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "el",
        "name": "Greek (modern)"
      },
      
      "dialling_code": "+30",
      "isoCode": "300"
    },
    {
      "name": "Greenland",
      "code": "GL",
      "capital": "Nuuk",
      "region": "NA",
      "currency": {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      },
      "language": {
        "code": "kl",
        "name": "Kalaallisut"
      },
      
      "dialling_code": "+299",
      "isoCode": "304"
    },
    {
      "name": "Grenada",
      "code": "GD",
      "capital": "St. George's",
      "region": "NA",
      "currency": {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "308"
    },
    {
      "name": "Guadeloupe",
      "code": "GP",
      "capital": "Basse-Terre",
      "region": "NA",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+590",
      "isoCode": "312"
    },
    {
      "name": "Guam",
      "code": "GU",
      "capital": "Hagåtña",
      "region": "OC",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "316"
    },
    {
      "name": "Guatemala",
      "code": "GT",
      "capital": "Guatemala City",
      "region": "NA",
      "currency": {
        "code": "GTQ",
        "name": "Guatemalan quetzal",
        "symbol": "Q"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+502",
      "isoCode": "320"
    },
    {
      "name": "Guinea",
      "code": "GN",
      "capital": "Conakry",
      "region": "AF",
      "currency": {
        "code": "GNF",
        "name": "Guinean franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+224",
      "isoCode": "324"
    },
    {
      "name": "Guinea-Bissau",
      "code": "GW",
      "capital": "Bissau",
      "region": "AF",
      "currency": {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "pt",
        "name": "Portuguese"
      },
      
      "dialling_code": "+245",
      "isoCode": "624"
    },
    {
      "name": "Guyana",
      "code": "GY",
      "capital": "Georgetown",
      "region": "SA",
      "currency": {
        "code": "GYD",
        "name": "Guyanese dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+592",
      "isoCode": "328"
    },
    {
      "name": "Haiti",
      "code": "HT",
      "capital": "Port-au-Prince",
      "region": "Americas",
      "currency": {
        "code": "HTG",
        "name": "Haitian gourde",
        "symbol": "G"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+509",
      "isoCode": "332"
    },
    {
      "name": "Holy See",
      "code": "VA",
      "capital": "Rome",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+39",
      "isoCode": "336"
    },
    {
      "name": "Honduras",
      "code": "HN",
      "capital": "Tegucigalpa",
      "region": "NA",
      "currency": {
        "code": "HNL",
        "name": "Honduran lempira",
        "symbol": "L"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+504",
      "isoCode": "340"
    },
    {
      "name": "Hong Kong",
      "code": "HK",
      "capital": "City of Victoria",
      "region": "AS",
      "currency": {
        "code": "HKD",
        "name": "Hong Kong dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+852",
      "isoCode": "344"
    },
    {
      "name": "Hungary",
      "code": "HU",
      "capital": "Budapest",
      "region": "EU",
      "currency": {
        "code": "HUF",
        "name": "Hungarian forint",
        "symbol": "Ft"
      },
      "language": {
        "code": "hu",
        "name": "Hungarian"
      },
      
      "dialling_code": "+36",
      "isoCode": "348"
    },
    {
      "name": "Iceland",
      "code": "IS",
      "capital": "Reykjavík",
      "region": "EU",
      "currency": {
        "code": "ISK",
        "name": "Icelandic króna",
        "symbol": "kr"
      },
      "language": {
        "code": "is",
        "name": "Icelandic"
      },
      
      "dialling_code": "+354",
      "isoCode": "352"
    },
    {
      "name": "India",
      "code": "IN",
      "capital": "New Delhi",
      "region": "AS",
      "currency": {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      },
      "language": {
        "code": "hi",
        "name": "Hindi"
      },
      
      "dialling_code": "+91",
      "isoCode": "356"
    },
    {
      "name": "Indonesia",
      "code": "ID",
      "capital": "Jakarta",
      "region": "AS",
      "currency": {
        "code": "IDR",
        "name": "Indonesian rupiah",
        "symbol": "Rp"
      },
      "language": {
        "code": "id",
        "name": "Indonesian"
      },
      
      "dialling_code": "+62",
      "isoCode": "360"
    },
    {
      "name": "Côte d'Ivoire",
      "code": "CI",
      "capital": "Yamoussoukro",
      "region": "AF",
      "currency": {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+225",
      "isoCode": "384"
    },
    {
      "name": "Iran (Islamic Republic of)",
      "code": "IR",
      "capital": "Tehran",
      "region": "AS",
      "currency": {
        "code": "IRR",
        "name": "Iranian rial",
        "symbol": "﷼"
      },
      "language": {
        "code": "fa",
        "name": "Persian (Farsi)"
      },
      
      "dialling_code": "+98",
      "isoCode": "364"
    },
    {
      "name": "Iraq",
      "code": "IQ",
      "capital": "Baghdad",
      "region": "AS",
      "currency": {
        "code": "IQD",
        "name": "Iraqi dinar",
        "symbol": "ع.د"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+964",
      "isoCode": "368"
    },
    {
      "name": "Ireland",
      "code": "IE",
      "capital": "Dublin",
      "region": "EU",
      'image': 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "ga",
        "name": "Irish"
      },
      
      "dialling_code": "+353",
      "isoCode": "372"
    },
    {
      "name": "Israel",
      "code": "IL",
      "capital": "Jerusalem",
      "region": "AS",
      "currency": {
        "code": "ILS",
        "name": "Israeli new shekel",
        "symbol": "₪"
      },
      "language": {
        "code": "he",
        "name": "Hebrew (modern)"
      },
      
      "dialling_code": "+972",
      "isoCode": "376"
    },
    {
      "name": "Italy",
      "code": "IT",
      "capital": "Rome",
      "region": "EU",
      'image': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcZGBkeGhkaGiIaHR0gICAZGRwZGhwaIiwjHSApIBodJTYlKS0vMzMzGSI4PjgyPSwyMy8BCwsLDw4PHRISHjIpIykyMzMyNDIyMjQyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwYBB//EAEMQAAIBAwIDBgIIBAQFAwUAAAECEQADIRIxBEFRBRMiYXGBkaEGMkJSscHR8BQjYuEVcpLxM0NTstKTo8JEY4KDov/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACoRAAICAgEEAQMFAQEBAAAAAAABAhEDEiETMUFRBBQigTJhcZGhwVJC/9oADAMBAAIRAxEAPwBkxHSs4opbc7FfervwxG6/6WFenujzNGwIYrW1xJBnHvt8KjCDsR61ZWXms+lFsCVF+Jvi5uqgjYjb4UOnChtmg+dXfTyketZjBkVlwuBny+TziOHe2YYeh5GsQJo08QTv4vI5rFlGZBHSKKk/IHFeDLTU01YVYitZkigFWAr2K9CUtjJHgFexXoFXFBsZIqBVlFWirKKRsZIgWvCtbIlW7ukcx1CwcCrKK9a3FeAVtjaMuBVgK8Wrig5BUSyrVorwVoq0tho8UVbTVoqBaXYOp4q1qqV4taClchlE80VNFXr0UNjalQle6KuKtNDYOpmEq4Spqq4NLsHU801K0015Q2DqIdI5rP76io9q2dgVPrI+dczwP0gujFy2WHVcN8Nj8qZ8T2snds9s+MDCOCDOMRifaupZI+yLxS9B/wDCnqDXuj+gHzBNJb30ktoqyrkkCYGkA841Z/e9HcB2javfUuLP3Ww3p5+1MsqfkTov0E6CcSPQ/rVLlojcD2NU/wARU3TZ8XedIMbapkeRo22yA+NCR5YplkXgXpPyBracZCz8DXj3WGGEe1MWsWzlGMdGHymtuGXlKkdJH4Gg8qGWJiZEB+0B8a0PDHEQZ6GaZcVwaxMCfYH5UB3cHAI/H40VkszxURuGdQCysAeZFeKnQ1ul5vvN8Zr25eLRqOojqI+YobsOiMNFeaasze1bW2T7Ux1Eb+9ZyoyhZgKstFJbB2ohOCHOpyyJFI42zLh3BwRRi8JO1XTgvun5Uci6NzjrXJkyejqx4/Yufgj0rD+BbpT5XX7wq4I6j41JZpIo8UWc7/DEcq9azFPXsA/70Ndsenxp45mxHiQtW0ImtFQUStnf8jVClP1LE6dGQt+VWKV6fWvJrbG1K6a9Aq015W2BqSoKuqVdbdK5h0Moq6pWgSvaG4dCot1ZVqAVqlo0jyB1JIqVfuTXlL1EHRnx427jRIVvWyx+7kEOcen3T71tdjqVJYIpBGD3lsZk88KcdQMiK37AsNaLTpgW0EgiJAUHPmVNMle69t+6D6g4B0TMHSTt5A02Ry144OnGoq20K+E4VrIuCGRdNvQdQO86tDMSDkz7ild1z4iT4t1aNJcTHjXZWBnIwY2G9dnwVnVaLMGFxSwb7OrE+JYjmdxzPWk7LauK5YDSkAkjScsUBU25XcfcFc+PaMm3ZbLrOCSpFexbrC6twMA+hoNxoGrQYDHzNMj9Lbsg3EQg+w5fVYSPY59KWHg3twyMYA8PeYGRuHWRt1I32o/hOIdk0XLQYAsQoPj2TUUmNS5AkHrvy6XnXeLOVYZR4kuBtwv0kVwT3bgDc6Qw650knYHlypm97VBAGRgxXK2LNtdYtnTqVla2/gIMNnIxAPQAzvRFvtG7aZEkkHVptmCQFjYxDjbY9Ymn+pUf1In9M5Xqx8ztzX4CPxphbsJo1aiQMwfzI2rlOJ+lPi0i3JBhpcL8oJB8jXtr6SCJe26ITGoHUJ5CIE+2aq8kZVyTWOUb4seOgOQsfvrU7kneJ5c58sVTguIt3Vm2wYeXLyIOR6GiVBAjlPOnv0S48gdy2RuCD54rR+DIUHxR1ggVd7RO9SzcKnSRgjpWlJhjFMGttcWQrAR/SDPxr3ieIRreksS/3siPLfNEs0CYkZxM+tUW5baf5YAI5DFI5odQdCzg+KuW8gfM/lW1/t648ciJGCR8QTBphbsKoKqykHpv6UOezVY7jI6596Vyi3bQ6jLsgRO3LgEYn0pjw/0keIIXzMSfhtQD9kGREnA5RWHE8E6HTg0GoSCt4nQ2+3w/2dIxEfif0osXFIJ7znjGTiduVcl/DupmJo3huJuLkL8a55xa/SXjT/UdE9ojeq93Sle1Lyhi3i6SPiZraz28G+tbKiNxtWU5JcivGvAxVKuErK3xKvhTJ6YqvGcX3aa2GAY9/akeVPsbpvyEixV/4auWb6R3SfDAHpTTgO3WYgOAPMUk8rj3KRwp9hwlutfD5D3oDiO0EAgNJ5ACTV+HZiJIj3mueXyaKLDwGAgyMGN9setQWRWCYLb7j8BWhuRuYodaQOmjdUFWFwdRQFy+BksAOpMCl93ti2mrSTcM4C7bD7W0TO00ycp9hdUhu3EetSuQu9qcQSSMTyAXH+oE/GpVejM1o5zieLV0hNvCvxYAj4Gj/o3xC6bxaANQJO3InPTb5VzP0aE22nMXTv8A5U/Sn/ZyE2eJ0nSQFIODGYmDg4neuzJHwJDI9Nv2OjULB2j8jSjiOyLRRwojXAOkwTDaucgZzgc6K4G0RYtCZ/lLmI69OWKVXnuJb4k6o0XSqEGSBhftDGcxkb9aioyTaXgeWSLim13Qz4fRbCWzJZVwSMwIO/Ohuy+EAu3HH2XYHz1W7J55wVP+o0Ha4y4bnjUg69BkAwAv8yIPIgEYJORHStvj3Fy3pwL1zxSOlpSCOmV+dI8TVv2F54ySXowvcAq3VBmQlsQNWh2AYAEbE4XzwKYsltbltWJ1Bn0BjJwBIBbxQZGx5ClPD9v6j3ly2CyWnuEqYwjXVgAg/c686ZvbHEX1ZSVNl4YEYbUofBB6DpzozhKVWq49iQnGP6XfIr4vhCBbVLgUI6ySv11G423IFEJ2ebrDVcJIBChhhQJJ0hSNOBON6Gv9m3Alq2FBa0U1wcRbhWInJ9Iplw19UKFiBPMmIwTkn4V2pLg5NmrBLPCabjC3di5bjVonUAcgHJkUzu3OJ1DTekAnV4FbYkHAAbr4Y96X2UC8TfuFk0OE0+IT4QAZmB8CaY8RYbS2kaiWuGBB+tcZxsfusKGSL/8Al0HHNX9ysIXtoWrcuTeaclV0xj7S8vid6b8JfS6gdSIMjcciR+Vc2ttjbPeahEj+of8ADAgsCY8TeseVZ8MqqdSXSDOGK6Z/0zq9xXPLLKLpnXD46yR2jwdW3DCtZOnTAiuds/SYkPNotoMEhgZ82wu8Tgc6zT6UiM2j7PPwkZpncuUTrThnSi2OS1U8OScn0xt5Uns/SW2Qf5dyR90Bh8QYqq/SlNu7eegGfhS/d6DS72OeJ4dyPAfbagL1u+MQxHlmpwv0ituwUq6k/eQkfETTm1xQYAggg8xkUkssocNDxgpdmc2bzL9YH3H61VuKnYxXUl1O4rB+CtMZKD2xS/UR8obpPwxHY4kgzJmiEIjA96Ovdn2VVmhoUEmDyAnnXD9ocb3hVklQMeBiw3J8UhY6fhTwccnYWd4+516XmWPEZyRnfafyov8AxG59tUPrjl69OtcR2jaZLdtoZ9YLGWMDaNz4RB5nkeleDhriwWMArOJyIzJ6cjjPSs/jqXKB10u52pa031kSSQIgBhqwCNPKeZjesu0+Ms2O7ItsVuKYKrnMFd8nGY8q47huIUGUZv8AiBZyAD44nmYg/wCmtuG0XQ7i5qFpQ8BCMaZWNf8ASYz1qf0Vvl2jP5Pofcd9IwQg4a3kHxF10legz1nfypc30m4wf8uPSD+CGl3fObhtpJ20iQCJIztEASTtHXlRKcDcJ8V22vkDqPw0Ry61WHw4RVV/YkvkM1T6S3mxL8sIoHTmVURHnRPEfSS8xARBbDkhJOomeQKCDyzWFngNNy3cLvce2bhH8vHiGmNQ6ROBzNV7Vv27fdE23JtEBRrCjOfECsxgD1YCqfTwXgTqtmfaRukLquXGaCSAR4TqKwCcjGawfhHa2p7sm5OdTORpjqJ59POjO0eKdLdlk3uvbEFmhdZEwEKzExWX0dfv7Re6qs2obDGUFw4Yn753qyjS4RJyt8tmP+Gt91f9Vz9alc4valwjLW//AErf/hXlbRm6kRp2Jwdy2rKVmWLGRHIAQRIM554im3ZjgLxCgSSqj0mcn0kfGlfZfb3e23AXQ6lQJOrcxI6xz/vTjs0rbt3SslbcNndv+Lrk8zBJ9QKnNvv5OuChrS7cjPs19dpRBBRQh8zkyOogikfafEDub6hTNy6WAIIwSPaZ5CnPY/Hpct6l0gnJUEGMkZg+X4Um4vj0uC8NILWnDQTM4Mk4xv8AhzqcdrfH8mnpoue10Ct2oveFtDf8W60SPtK3h9aYfR/irdzShXxBAVJjJCwYyeX/AGmlVt3LhQjxrtDNy5tdXWxxzWIA5eVOewSxa2zJlokai2kEXbYMt5AGOvxrZG3FpkYRSdpgPHdn2xxEq1sI1ogp9VNI7wuTAjk8j+mmd6ytviENsRqYh4MyQqgA+cRQXG6tclYIQqBMzqF8Hl/9wfKie0OMAuKLiCXfw9A2m2p3B+0QB70tcrnwNfHbyJu0eKdVtFHClnth4iSrCDInALQKcdmqNVuR0/Cvbq2TwqwADqVdXdpqgC2ymdx/xMyY8NA8E694lpXllyQUiRBgk7cwa7I+DkfkYWrjHir1smVCqQvTA26c6YcWr5gn/mESZjS6KozP2SaV8M9u5fdLbE3IeSUAVhbKhwDM4JAz7Ubc4tUlCZKlwYQbjuywGTzuL8D76comjCQKeLZluofsKCYjOU3A9T8qojkgalUjP2VkAbkaQOtEXuIXS+kRuCWCxhmUg+GYx15igrKMok3oUHHiOmMROwxj4iueai32O7E5Rjwy57tEJtosMqudO4jSVBB3MHlQvA926hniS+nVJU5OFgSAek7+1We13uvuyT3i6DBBH1dJKxt9Wc75io9kWihLBAO7Oo9Ek+L4HOdz1mgox8dwTm2HW+MW3emAii0fskyfq6jjrGKD7d49B41K6tY5EQCNid42q9u8neC5rVlFoyv1iBkyQ0Yk8vjSrtTtFL6hRESCdKe0GCBA5f2oxq0kuwjbp2wvs2XOogadEgz6A49TTXhu12RRb7sHSQo8UHbVORHPrSXh7jBoS0WEGR/SSIjUfKmPCdj32AIRQCQwDPEYURCieU5jetkUX+phhJx/Sgo/SAhtJtttOGB6enUUcvbAABIYCQJjaYA2PnS+12Jc1sG02wAPGQSDiSASQYxJ/wAtCXblu22h7muCJFtcQNOlgSRJ8uUedSWLHIr1Zoc9odqalFtGOpiCTBEKDLgznKhhEcoNKO77x3I1MAfCQNRjSrRB2k8jXty2O9Fy21xk0vJwASQxGJ6BqJ+j1xi90a4OoEgE81UKNsRpYRXRgjjiqRzZ3OT2YLxQPhQ3WUBI1EsATrdRGn/LOeRrfssgK4Ja5OrxGcjAMSZ6fOgLnE27hPelremV2LjOs6uoGYx0q1m8qnQFkAoAx83zG+FAn2puyNHlcmz8LbGvBVe9BJ6EBlLb5yWOetY8DbsW7V7TdMd3bDH7oI0ry5is+D4xbqC2qspuXHQLgwSpPlgaum9aL2My2ronUH7oSASCttiCcTvG1YDrij3hhb7xFWCzOonSTMqLuSeqH2J8qZrxLHhe8BIuGyX2wDoLTk+8RWVpLQdIDBg6xKsANKG10g4A/GheOvm2qWFhkNrQWOGgppkTAJ32HKmaTqmKm1doc2IZFb7TKpiAFkgGfiZ2rnOMuNc4O27klzbeWnJhmE7b4/Cui7PZSg/pAAiMgCFJJPON6R9r8L3XDW7c6tNtsxG7M3Uwc7frSNUn/IydtfwMP4Rblq0CBKKjITMAgCDAImK14ThBathbcKx3IXEwFB0sTyAETQXHOf4R+UWJ+SxmtOxSDwiEsdZQwM/V0MSZ6z+FMlaEbqRgvYQHO1/6K1K4n+Juf9R/9R/WpVNWT2XoY/R4jvUB/wCl+/wroOItheF4kRH8sn/vP50JwXAWbFxXLIg0mDrIBnaQ7Hz5imXDlL1u8mtWQiHIMQpaFEjkR4ZHWuds7IRai0wH6Gb3R0Lf9x/WgXYLd44f0n56YHzrpuGexw2o6fEx5eFesAsYO1LOP7RsOpQAkMfEonI5jofXyrRbb4XolkUYwpyS7/6ZDi7av9YkB+GMAH/l2z3nvmKz4XtBw9lE1KNdpXkCGBNwgeX11+EVnpugFgotKJMkKpIjY6tyd8eXLcw8LctaXuOxEoB4S51SQsByADIJJMARTOCfcjHN/wCbf4EfHcVcLEd42rvHka4OnVdAMTsJUfCug4fs5mZrkAHVba0SCQzLbQk6kysd30MxtWTdnW7ps3HnS7MpEwVAcgjGDOkHnz3rTieNGsLbMqjKQCYCnQxmB5gn2pJyS7eCsFJv7lwWRERGF4CJQQphfEpVSo+ttbGTpzHOsOGa1auC4LcOBpwd1AgAQTsNPwoC43eXQbhnWUDCfCIKyZOR9rM8/KseKtm3dCl2e2QW/lux8J1KFGw1CR8JpozdWFwS4GvD8UUfWiHUDdgbyLji4wIBzkL0286p/iQuFzKzLFiCPDqNsGcyBNtY3M0mublla5pnwgsTI6Cccj8RV+D7ZULKKdwgLQ2RpYHScEghSGOx2rJqmzNO0h4l4g5tXWUj7kbl2xqyfrCDH5VXjL9tVE8LdBLeHLKNRABMAiTAknyk0Jxva9+w5W6twPpDEMBsRqBJ1Tt70HxPaN+6neIV3CqrdHUHUucsDAj+qKKkpcoDTjwwvgGVl1G3jxYB84O4JJxG9FXOzbdxIthkzuGmeR2xHt75onsuwugSvLkJ+EU4scMoEBfgKm5MdRQl4HsE6iDduMNJGktIgx8sbU1/wJQPCBv0j4xTGygB2oupSk27KxSoWcN2Zo2UbR1/GmqcGrKkgjSZEErmIzpOR5HFeIaKWptFE+BZ9IeBFy3sZU4gkfW8J5id/wAa4XieHuW1Aew5MqNQZZmVGQzMCTrA25+VfS+IEqcdD8CD+VcD2z2g99mKWeIt4UkPbGQCDmCYAIBBBmQOVVxWuCeSmC8Neua2JBJLFsELqzAJUwD0+NMhxQS2begI5kyJV8gxg558ulIbi3VBb+HcLudRBXckk7GJ1fOibPE3k095bm3IGhofRjYblfbHlijkjpJOND48m0dZI0KFxo7xbsgxkhhGSDjf1rROLFrwsjKSTvnmB9mTiI2qcRa4d863W5OArBgDMGDpwPXqM0K7XLZGprlxFJltAdVHh1AlRIPnEbehRZk3S/0r0016DLfaFkMtxdL/AMwmVIldSkaviAKYDjSLN3LoxS33YKyZ0osqRMEsOW8zS63xguO721tMGILCQzE+HBkAgEiPQ1btTimbQ3dsjo0gtr0QrAKgUchGATzHSqLK9kmiUvjOrTCrnFP/ABGgMSjvdHSItK4jEjMn3NbcWs8GGnxC0pDbt9VScmg+G7fIK95aMK2SpxgMCIPr8qZJxNm8Gth0VGXSADpdRsAFbfHQVd06oh05Ru0bWkCWm0iHCMQZxME7AdfSkna91m4e2zRqa2Nhj6xE0/0STbBIJDgSMHBAM9PakP0gtG3bt22iUtoDBxOrz9aWuPyDi/wNuDdVtpqMfy1GSBMgYyflW0qGBAkYxyIiI9x+NIPpA8cMv/6se61Y3CvAgiRHDgiDEfy5xFbmvyLxt+By3A8Mf/prY+H/AI1K4H/E7uf513c/8w9T51KtUvZG4+gzhna66ob5VmaFESTsMmBA9+dHcLwd1LrWddxpIUsOU5Bz1kb0PwfZzJct3YtiHB+tvkHH3jXSdnNbe93jtctOSpFt07vVpyCrtgnH1YBrnxPaNt2dGWvCoT8H2UFud3xNwyBIkFmM5UeERAAbp8qOscGoUuh0wLZGkEQGCuwkkkkfekQMRvXVXOFsyXYAkbl+XKc4HypbxHGcO+pbdzUSYOjImIy23LlO1LkjlaqL/BPFHCpNyX5FP0kREuqbay3daIYjSfFJJPXH96D7Z7Se+rKiOT3oKaADjJ325nc10/G8DaI1N4yMZx8hSXiUuDx22tBlIIBIMkEYj865ceVW+OfZ6DxdlfH7HMpc4xQmGKqPCI1ASZMkZknemVu7xN/SSqW4ZSGEW18IYS+RgSJkHVJnzOscV3VzvChlmbKk/wDLcWyEzJJ8P1TzIjBFB9q9pC4lywqCSlyH2AgxpyJJB57GQelX6qk+35IdKvIE/FAKwf6yhdRKgAnUdTcjGPPnQfERch7c3WZWIVSJGkiAYtjTvt6Z62vowFsBidCKCVYicN58wQc1kty6gTUus6JMwCSWiAVzsARg4B6zVYS4J5O4XwPYq3pRr9q3dyBbuXHUnGYBA5YwCcUF2bZSyGd1S6p/6UsVYQRIIG0mYn1waJ4Xj2talKtk5Gk3AY8M42mJyNjRPAfSYW7T2+7A1WmU3Ak/YidQgrsMGR61Sk0R2aYLxX0mssx/ibTXHgeKeUDSMtJx8NqnCdo22e3wwTM6mJ8gWtxvqIlekaaX8NwSXbNtiFlQVJgS0ktLHmQCB6CmfYPZSrcFwcp3ydiNz5GhGKSpI0sjbtna8EgVVAGAAB+A5UdNLbbR/vRi3ppZQGUwy22dqInzoC3d86211NwKKYYlbB4oJXqzXRS6DKYarg0DxtkEseqgfOeVZ9/WvffGhpQymcr9LDotatGtJBaHhgdZZYU/XBnImdsHlzvD9oXnuTbtP4hz8IHTLHPh8ufqK7ntLs9bmklSdMEdPWdvL3oB0CN4VGPPO0e21PScaF2akc/xHZ9+Rcc6QpUmW7wmWDTlQB0gCIoLi+13TSwUWyo+vbGpGzIDocqQSTqWmfanGMZWYEZHpQvAJbZWVwMn9KnGDSuS/od5E5VFmH+J2rpAu2rbyuXtmYJMlmYQwP8AnB69RRtu27ALw3EB1ltNu5/MUKNz3i5EnbA3oHtP6NBSHtEglZlDpYZ8qBKXFUM7EsmshgArHaMASzZO/wAaMYRkrg/wM88oOpr8h/G3bqt4uHYkSSyNKtG7A7lR60Lb4o3G0rbYHOGEDHRth7zRFu9eXQxNwrDQDacGGEydI05mS2Y0xWdxrjDUSFdVUsUAWS53JBzIjpt5xVUppeB1nV+R/wBicNdLqEuMLTKTrV10yDDLpaZIJHLM179KWgy3ikAGecTmNhtypHwSFb2vVm2weMida53MYnYVt2zx3eifMn+1CO6k7dql4J5HCUdkqdsnaNu4yKL1hiiKPGvjhTtJQgqMc+lUbikewLKXCsSDz8JBEHXkwD8hXS3OMtm23eAHRw+kTBJ1MuRz/TM0O30e4dznwImtxowAjLcuhSDIxoA+MRU38jWTjJdueCKxyatO/wCTj/8AB7nK5/7Z/I1K6Diuy7AdhbVyoOCLpAPWAQYzPM1Kb6uP7g6UvX+njysPbYhg2+racYPL+9EdoamJCRdLAAlmMSAPtNsAGJwcz5GhL99QsMHaQdKoFEYOSXIAAn4xRfZyoABbDq4n7SvqDDBY2xvkiDEQcc6p8XZRaQ3yVBK2/R7w95bjNaa4w7seEr9kdV1HT9pRIGMxtS4nuGUBgC7auRyIIjbHOM771tc7q2LoYs73bRBOssA+QQZMzMEA7aT5UrPbHdtosiXVArYxiBqLRMwAMRGcmjrKMrT5/YRSi48rj0zrBxuhA94hCSYtldRwSBAjO2+1K37duanW1ATu2gEDVLO5LgjbGIHSkPCI1xmdnLMGIacAcsddq0skG6QeVhzGeTtB/fWuZ4FzZf6huqNLPBteN0KXttpOojUU0tuCATzAM5843DbsztC5aQPdsrdQPh1AIysMQqtAHhB0kL9XcCr2ew3a5cSzda26FHVkOZc3PCY3Hh2pbxvD8VbfVeIYB20XbahWLwdKtsApy2ATJ84ofbJ62v8AobcVdP8A4M+Iu2jhVQGElFGkEgOslIJJk/Z1yfOkF3j1W4A73AVUSpUFR4QIU6xECOU4FA8P2gWIBtwy6iS2WZY+qxOGgD7teXOOuXxpW0CBHifSOvQL1866I4qOeeZsYJxj3M27RifrXG08oGBJ88UX/C/y9LwxIMwIGeg6fpS7hrF1G1ErERpXb1J5mui7Lti4QSN+VWa1jZCL6k1FeQXs/hQtoCIkk4xTDgrekf3ph2qgVVAEClyPij8eSnGwfKg8Utb7DJXgYq6X9qXpxA2mrpe86q4kFkHHe+tapxI50m73+qvVv/35+9TlArHIOjfG/wA6gvg8+VI344r4AZaAYk/FugmfXzojhnMKGGQInTpBO5OM7k7VNxKqYzbfn8fzoxDjbP750qW5G0yTzMf70UbkncTG369PwpJFYyQeSAMc/h8sUp4y2AdQjf50ReYjMx++tY39XlH72rRRpMRcTw4ZuYnbpPXp70q4q2yNBDeRjHUx58+XPFdS6Ek8+p/fOhWsF2I+rHPBHlOpSCJjEe4qi9EHw7FPAcQS6yQRtv75ByKD+k0m8FTEJJhQSJ1Z0nB2zPWjLtlw0ght4VZwOcIS0rP3Tj5Uu4pz38lYm0QTvkfV6R9Y1NYtZ2vRZ5doU/ZXh+0Ljq4dEMjF63A0mNK60YggCBIid4pv2ZbturF1dy2hptuCsAAjJgnxAkEjnXP2byW7jF3KRb1AqpJJGvwmGETHMEZ96et2BqAZbxJzodAVHwDwwxXTGDXNEXO+7M34Ze8dx3iagBDwwBwIJQmNtyB70Glsqqt1ub7gzcNNG4e4ltMK7hiGcQjMstyO5GMTmPal6kz4kuLBBEpEnVjkRGZ360H+6HT44Zp/illLgFy3oVlC+HwlSCxJg78sbZ3p7YcjT3LK8kQGySClyVZWxs0YbnyrkLnDrDF1Un7OohjIMkwxE4nAo+25GkLGMQPQ7AVz5sSv7SmHI3H7hn/DXFkABck6e72kzGPWpQP8dd/6jfE1Kj0ZFt4jJEt4DHWfgo/M17xl6F04CR9UCF9/71wXZXbzW4V5ZY35jfbyiMH+1dLxN8PYdlaQbbwQf6T12PtXQoV2EeTZAFzsq28PbaBuFnwHMyMeHIrO7Y03CSpBJJ+JnfY0X2UYsp7/AImt7l9NQRiCzAkKfLn8qrRCSsXcANPe7ZuHl6URw1qbmFlmXT6gmYrQcDEkGZMkfL32rzhmKvqyCP3FTlHuLdNH0D6H3Fbj74YglbdgFehCsf8A5jatfp4FU2CFgHjbE46MRj1gUi+h4NvjeIMeLTanzJVCfx+VN/pm/eWwT9ZHS4vlpYZHtJrkUUml/B1uTacjjPphwFsXQFEa3jzhlac+RFIX4FrZlf705+kN43HtunK4rE+zY+ZrGeoMeVd2KP2pM8/Nk54K8JeZsMII9qfdluF5UmQ84ovhrsGTT5I7RoXBk0nsNe0uJDCDSh5jBn8a24niZjFBNczWwxUI0b5eR5J7GwvkDIn1P96nfg4jPSc+sTNCuZjyoXhiO+uqVyyoyt5QE0kf5pppSojjjtdjfvo3n4TQvF9paYVINw4WDt5xOT5enWl9zjNb6CT3cgNpMM0yIJzHuB8qi8TaRCUCs1wsCpBaBII03GM88nkPMgGUpu6R2YcCraT4GPAdo6bYVlGtmmRMsNtbaszMgA8hTThTGR9U5+t+W1c7w1hiTccgsZ8ogYAjYQMAU0sXORAPIE5I96yi6EnNOVrsPFueR9ZGfeM+80QGIOxBGRMR6qQcfCR50lgBvWMD8uhmjbQg4eI2BwYJ5H1pXEaMw57xfOrP7Mk4+NZC+dzqnyP5Z61ghbbM+Wx8/LapMifmDBB6eR8vWgkNdhBv4PKM/rVGMCSSJ5ViXjJPntj5bf71pauAzEz5UUB8lzbUjxaiAZkMRmI1AiCpjmM4pJx/BnvANCudMq4bSzLH1iNmI56eUHFNkeD8d9vw/eK94m2XSDAhla2fukH7JGcj86ZMVo4PtngifGjD6mkqAfPcxHPeaz7M7bu2ngNpndGyjGTmDt6iDXY8TwtknU7PbY7kfVJIjByR61zXHdkqSchvMFW+BBE/CfKrQnQrG3AfSFDbtC6SrGNTEyp8LNqxzJAEf1VvxfbthhBvt/8AiH/8YNcPxPB3LcLMiZGQRzGCDBHoaFusxEFYp24V5Mv5Oqt9oDQALiYYlkK5Xfdj9YHp6VTsjta3dbS1tLb8gCwDb7Zw3lGaQ8LJS4zCI0x6kn9Ky/gDGomOoqWRJpUUg3Hud1pI+3b9y8+/8upXM2u0Egfzr48lIIHoWz8alc+k/ZfqQ9CviuDjPKq9n8U6MVU4cFWHIgiNuvQ103B20YaXWQRH+3Sk3a3Z5ttIIIGQRzj8KynboDg0r8HQdnOpQID41HiXmNXiB9IIzQ3FKP4q0TvpUY9W/WuUXiXDawSG5EY/Yro+z+MN24lxgF0rDEbeGTqzt9b5VSxDoUNecRxNu3Fx48EHqdxExymud476QESEgeviPuQdK+2o+lA2uKLshY6hrJuCIUjGDzacjePKtJ2az6N9G+MW7f4i4oI1Jw7QRtNsNmKbdquO7IJkEEGN84rl+xni/wAQ4GGNtMRAFtdGAOWB5UXxnHEzBYA4GAB8j6/GuTp3P+iksiURITtjIO+fh++tQmNv7Vg1zJ9T8PQ16X/f+9eguDzJM2DdPlmrI/n71l3kmZH4V4WPWixEE94es1RieoH5GsCx/Sqd8eg6evpQserNkckkRPWPjmsTbGp2IaFRBIMbF2knkJ22J0mOdBWbui89xrS3FmU1vEGAJgAzgHBEZqnH8e7yihLaEQQg36gk/kFwB0pHI6IRjHmycfZso4dSz3CxbTqGkA5QkqJGM5JJkCIEm/DWpOpok9BAHOABgDy86qnDCFbqoH+nwj/+QtHW/b9+laKNkyeEErcA51ojT1M9CAfhWEen5/pRIEwYAgjyxuZ/WiRCrIwNXSPzHPcRRCjA6Z2ORmdval9q4YyZgDz6nf0jHnWyuIkGD6gH95oNDxYws35wYJ/q+Xp0961JkyB7/jtvHxx70HauAtmAYM4G+d/aK01kfWgHqP0n8KWiikEqx+7t5+vXNZu8DLT+PyqFiYMg75U5iM/vP51SZkxAmJMT+lag2bJ4lOWmorgAjcEZGxzuP31od5kiZmMjGfyOK1aYEDEz0g88cvMda1Gs1fSE8Y1KQQ8xgba/CMkbwI68qCucIwbum0tI/lMcalxtmDy8MgcwKZWrwCxiIyGODIMqQRzHr6Vj3CvbNsq8DKGQWUmSnP6vQjkTMVkFo569wbK2koCQThCVIO5xIM535giJil1/hFggqfvAEHY85AziDJ/36dFF5O7u6xdWdLaS0gHcESWGeftSfibbIShaYJAMyDt18oOk9RTWI0hBcUhlTTCM0sYOdMxvyo25ZBWK24ixDqN4yM9ecA4M7jl7YqVG3Mfv0rNmFZ7O/eP1qUxJPmfapWsxbh2jpPLNeca4ZSDt+/jVQ0bVncJNS05s6epSoVXeElcb1nY4hkV7emdSkek8/lTZErNuGXVMcqprZHahdY4Mtvmm3B8KAR5Z+Ga1RAKICwp601JE7bGHZkC2WnxFmPLyzn02rzibjGQecSOuIk1Xh7wW2AMkjptNDXT02PlFJFcthm/tKNvtH73r3V+z+/Wq14RVTmaLhvOvS1ZT5V41EyRdn8v1+NYl55fv0r2aqxpbHKXff4/DNZ27OYrVhNXtryoBughUBSOat8mA/Ar86sE5jl7+1UQxjlz8qvsZz5fqOv8AasuASdmiP1FaC7j0n9+n61kDmd/z615rxBk+fr0rGN0eT0ON16bZ+XuKsH07D/MvUc4I+NYvbU7HfM+0lZ9RHvXlm6QY+H4RNYwwDAgZz12PlIHPf5V7rMZ3kjzxmfyrDhuIj6wGBHXOw+H5Vo5XSw85mPgcGOdYdMMScEc9jy9DzHtVlAYMQMifMx0PM++9C8OxBB5zjpBkE+WK1MqRGDyPLBgg+R/cUKGN1OZ5HEj4g77fh86tpmczzwPYnO/+9YhyVBAggiRzxif9hXtr6pyBucGdyfxoUMmbozbYjb25TjOarZfuymfCWgAbgE5EcwJwMkRjkKxdlIDRqj7QwR6jkPMVa+moDxDdZaIkjHsYNANlnm3dKEgJdJILZ0tIlTkeHmII3I55D4t2W4LTBdJOCx1Dc/abl5biY86YcfYJtldUmQR7H6rRgTnIEHpjPicXbuaCyFdJ8RP2TGNTAyFMxJxETE0TM5y9cCFg6EgExmCvUenltWbqpC6TqAG5EGfT+59eVdDxPAga1IhifCQgHi8WkKU5HYiJ/GkdsKQdWDI2kGMAwIj4Z8jWFoGj9xUo27w9wEhSYG0EHHLlXtYIrqpqVKKCz0CvIzUqURGaIa9d5qVKIrCLXzj9K8uNmDUqUvkL7GLNXoaalSnJMhMVU1KlBhKmvGqVKBi6CtIAny/c1KlYzLT+f4AAfP51YSQB0JA/HPvUqVjHhO8zttPw/Gvbi7dCMT5c/nUqVjEOInY5xiYOa0IkyPIe8D9zUqVjGgskAecH4mKvqyQM5g+9SpRXYYvaZZJEjMfDpRN+D9ojIO3xPx/GpUoDIveczBifCT5k+nwnyq1krJIJXO45bTPXP417UrBNA2SGAkmJG2fLPlV7dvfEjz3kfv5VKlAZGfEX+8VhpBZQIO28kEHcfV9iPeq3LRKpcUZiHzDMvMTgSIPkfPapUoBDeDvqxNmAyQsQAAyEal8JUARIMfhtSjieHtadOmWIYwCcRzUkbH89ukqUTAFri7hA/mkerN+VSpUoAP/Z',
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "it",
        "name": "Italian"
      },
      
      "dialling_code": "+39",
      "isoCode": "380"
    },
    {
      "name": "Jamaica",
      "code": "JM",
      "capital": "Kingston",
      "region": "NA",
      "currency": {
        "code": "JMD",
        "name": "Jamaican dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "388"
    },
    {
      "name": "Japan",
      "code": "JP",
      "capital": "Tokyo",
      "region": "AS",
      "currency": {
        "code": "JPY",
        "name": "Japanese yen",
        "symbol": "¥"
      },
      "language": {
        "code": "ja",
        "name": "Japanese"
      },
      
      "dialling_code": "+81",
      "isoCode": "392"
    },
    {
      "name": "Jordan",
      "code": "JO",
      "capital": "Amman",
      "region": "AS",
      "currency": {
        "code": "JOD",
        "name": "Jordanian dinar",
        "symbol": "د.ا"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+962",
      "isoCode": "400"
    },
    {
      "name": "Kazakhstan",
      "code": "KZ",
      "capital": "Astana",
      "region": "AS",
      'image': 'https://images.unsplash.com/photo-1557841066-eefe351308b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      "currency": {
        "code": "KZT",
        "name": "Kazakhstani tenge",
        "symbol": '₸'
      },
      "language": {
        "code": "kk",
        "name": "Kazakh"
      },
      
      "dialling_code": "+7",
      "isoCode": "398"
    },
    {
      "name": "Kenya",
      "code": "KE",
      "capital": "Nairobi",
      "region": "AF",
      "currency": {
        "code": "KES",
        "name": "Kenyan shilling",
        "symbol": "Sh"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+254",
      "isoCode": "404"
    },
    {
      "name": "Kiribati",
      "code": "KI",
      "capital": "South Tarawa",
      "region": "OC",
      "currency": {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+686",
      "isoCode": "296"
    },
    {
      "name": "Kuwait",
      "code": "KW",
      "capital": "Kuwait City",
      "region": "AS",
      "currency": {
        "code": "KWD",
        "name": "Kuwaiti dinar",
        "symbol": "د.ك"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+965",
      "isoCode": "414"
    },
    {
      "name": "Kyrgyzstan",
      "code": "KG",
      "capital": "Bishkek",
      "region": "AS", 
      'image':'https://images.unsplash.com/photo-1629340038197-191832a53546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80',
      "currency": {
        "code": "KGS",
        "name": "Kyrgyzstani som",
        "symbol": "с"
      },
      "language": {
        "code": "ky",
        "name": "Kyrgyz"
      },
      
      "dialling_code": "+996",
      "isoCode": "417"
    },
    {
      "name": "Lao People's Democratic Republic",
      "code": "LA",
      "capital": "Vientiane",
      "region": "AS",
      "currency": {
        "code": "LAK",
        "name": "Lao kip",
        "symbol": "₭"
      },
      "language": {
        "code": "lo",
        "name": "Lao"
      },
      
      "dialling_code": "+856",
      "isoCode": "418"
    },
    {
      "name": "Latvia",
      "code": "LV",
      "capital": "Riga",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "lv",
        "name": "Latvian"
      },
      
      "dialling_code": "+371",
      "isoCode": "428"
    },
    {
      "name": "Lebanon",
      "code": "LB",
      "capital": "Beirut",
      "region": "AS",
      "currency": {
        "code": "LBP",
        "name": "Lebanese pound",
        "symbol": "ل.ل"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+961",
      "isoCode": "422"
    },
    {
      "name": "Lesotho",
      "code": "LS",
      "capital": "Maseru",
      "region": "AF",
      "currency": {
        "code": "LSL",
        "name": "Lesotho loti",
        "symbol": "L"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+266",
      "isoCode": "426"
    },
    {
      "name": "Liberia",
      "code": "LR",
      "capital": "Monrovia",
      "region": "AF",
      "currency": {
        "code": "LRD",
        "name": "Liberian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+231",
      "isoCode": "430"
    },
    {
      "name": "Libya",
      "code": "LY",
      "capital": "Tripoli",
      "region": "AF",
      "currency": {
        "code": "LYD",
        "name": "Libyan dinar",
        "symbol": "ل.د"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+218",
      "isoCode": "434"
    },
    {
      "name": "Liechtenstein",
      "code": "LI",
      "capital": "Vaduz",
      "region": "EU",
      "currency": {
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "de",
        "name": "German"
      },
      
      "dialling_code": "+423",
      "isoCode": "438"
    },
    {
      "name": "Lithuania",
      "code": "LT",
      "capital": "Vilnius",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "lt",
        "name": "Lithuanian"
      },
      
      "dialling_code": "+370",
      "isoCode": "440"
    },
    {
      "name": "Luxembourg",
      "code": "LU",
      "capital": "Luxembourg",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+352",
      "isoCode": "442"
    },
    {
      "name": "Macao",
      "code": "MO",
      "capital": "",
      "region": "AS",
      "currency": {
        "code": "MOP",
        "name": "Macanese pataca",
        "symbol": "P"
      },
      "language": {
        "code": "zh",
        "name": "Chinese"
      },
      
      "dialling_code": "+853",
      "isoCode": "446"
    },
    {
      "name": "Macedonia (the former Yugoslav Republic of)",
      "code": "MK",
      "capital": "Skopje",
      "region": "EU",
      "currency": {
        "code": "MKD",
        "name": "Macedonian denar",
        "symbol": "ден"
      },
      "language": {
        "code": "mk",
        "name": "Macedonian"
      },
      
      "dialling_code": "+389",
      "isoCode": "807"
    },
    {
      "name": "Madagascar",
      "code": "MG",
      "capital": "Antananarivo",
      "region": "AF",
      "currency": {
        "code": "MGA",
        "name": "Malagasy ariary",
        "symbol": "Ar"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+261",
      "isoCode": "450"
    },
    {
      "name": "Malawi",
      "code": "MW",
      "capital": "Lilongwe",
      "region": "AF",
      "currency": {
        "code": "MWK",
        "name": "Malawian kwacha",
        "symbol": "MK"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+265",
      "isoCode": "454"
    },
    {
      "name": "Malaysia",
      "code": "MY",
      "capital": "Kuala Lumpur",
      "region": "AS",
      "currency": {
        "code": "MYR",
        "name": "Malaysian ringgit",
        "symbol": "RM"
      },
      "language": {
        "code": null,
        "name": "Malaysian"
      },
      
      "dialling_code": "+60",
      "isoCode": "458"
    },
    {
      "name": "Maldives",
      "code": "MV",
      "capital": "Malé",
      "region": "AS",
      "currency": {
        "code": "MVR",
        "name": "Maldivian rufiyaa",
        "symbol": ".ރ"
      },
      "language": {
        "code": "dv",
        "name": "Divehi"
      },
      
      "dialling_code": "+960",
      "isoCode": "462"
    },
    {
      "name": "Mali",
      "code": "ML",
      "capital": "Bamako",
      "region": "AF",
      "currency": {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+223",
      "isoCode": "466"
    },
    {
      "name": "Malta",
      "code": "MT",
      "capital": "Valletta",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "mt",
        "name": "Maltese"
      },
      
      "dialling_code": "+356",
      "isoCode": "470"
    },
    {
      "name": "Marshall Islands",
      "code": "MH",
      "capital": "Majuro",
      "region": "OC",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+692",
      "isoCode": "584"
    },
    {
      "name": "Martinique",
      "code": "MQ",
      "capital": "Fort-de-France",
      "region": "Americas",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+596",
      "isoCode": "474"
    },
    {
      "name": "Mauritania",
      "code": "MR",
      "capital": "Nouakchott",
      "region": "AF",
      "currency": {
        "code": "MRO",
        "name": "Mauritanian ouguiya",
        "symbol": "UM"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+222",
      "isoCode": "478"
    },
    {
      "name": "Mauritius",
      "code": "MU",
      "capital": "Port Louis",
      "region": "AF",
      "currency": {
        "code": "MUR",
        "name": "Mauritian rupee",
        "symbol": "₨"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+230",
      "isoCode": "480"
    },
    {
      "name": "Mayotte",
      "code": "YT",
      "capital": "Mamoudzou",
      "region": "AF",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+262",
      "isoCode": "175"
    },
    {
      "name": "Mexico",
      "code": "MX",
      "capital": "Mexico City",
      "region": "NA",
      "currency": {
        "code": "MXN",
        "name": "Mexican peso",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+52",
      "isoCode": "484"
    },
    {
      "name": "Micronesia (Federated States of)",
      "code": "FM",
      "capital": "Palikir",
      "region": "OC",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+691",
      "isoCode": "583"
    },
    {
      "name": "Moldova (Republic of)",
      "code": "MD",
      "capital": "Chișinău",
      "region": "EU",
      "currency": {
        "code": "MDL",
        "name": "Moldovan leu",
        "symbol": "L"
      },
      "language": {
        "code": "ro",
        "name": "Romanian"
      },
      
      "dialling_code": "+373",
      "isoCode": "498"
    },
    {
      "name": "Monaco",
      "code": "MC",
      "capital": "Monaco",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+377",
      "isoCode": "492"
    },
    {
      "name": "Mongolia",
      "code": "MN",
      "capital": "Ulan Bator",
      "region": "AS",
      "currency": {
        "code": "MNT",
        "name": "Mongolian tögrög",
        "symbol": "₮"
      },
      "language": {
        "code": "mn",
        "name": "Mongolian"
      },
      
      "dialling_code": "+976",
      "isoCode": "496"
    },
    {
      "name": "Montenegro",
      "code": "ME",
      "capital": "Podgorica",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "sr",
        "name": "Serbian"
      },
      
      "dialling_code": "+382",
      "isoCode": "499"
    },
    {
      "name": "Montserrat",
      "code": "MS",
      "capital": "Plymouth",
      "region": "NA",
      "currency": {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "500"
    },
    {
      "name": "Morocco",
      "code": "MA",
      "capital": "Rabat",
      "region": "AF",
      "currency": {
        "code": "MAD",
        "name": "Moroccan dirham",
        "symbol": "د.م."
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+212",
      "isoCode": "504"
    },
    {
      "name": "Mozambique",
      "code": "MZ",
      "capital": "Maputo",
      "region": "AF",
      "currency": {
        "code": "MZN",
        "name": "Mozambican metical",
        "symbol": "MT"
      },
      "language": {
        "code": "pt",
        "name": "Portuguese"
      },
      
      "dialling_code": "+258",
      "isoCode": "508"
    },
    {
      "name": "Myanmar",
      "code": "MM",
      "capital": "Naypyidaw",
      "region": "AS",
      "currency": {
        "code": "MMK",
        "name": "Burmese kyat",
        "symbol": "Ks"
      },
      "language": {
        "code": "my",
        "name": "Burmese"
      },
      
      "dialling_code": "+95",
      "isoCode": "104"
    },
    {
      "name": "Namibia",
      "code": "NA",
      "capital": "Windhoek",
      "region": "AF",
      "currency": {
        "code": "NAD",
        "name": "Namibian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+264",
      "isoCode": "516"
    },
    {
      "name": "Nauru",
      "code": "NR",
      "capital": "Yaren",
      "region": "OC",
      "currency": {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+674",
      "isoCode": "520"
    },
    {
      "name": "Nepal",
      "code": "NP",
      "capital": "Kathmandu",
      "region": "AS",
      "currency": {
        "code": "NPR",
        "name": "Nepalese rupee",
        "symbol": "₨"
      },
      "language": {
        "code": "ne",
        "name": "Nepali"
      },
      
      "dialling_code": "+977",
      "isoCode": "524"
    },
    {
      "name": "Netherlands",
      "code": "NL",
      "capital": "Amsterdam",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "nl",
        "name": "Dutch"
      },
      
      "dialling_code": "+31",
      "isoCode": "528"
    },
    {
      "name": "New Caledonia",
      "code": "NC",
      "capital": "Nouméa",
      "region": "OC",
      "currency": {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+687",
      "isoCode": "540"
    },
    {
      "name": "New Zealand",
      "code": "NZ",
      "capital": "Wellington",
      "region": "OC",
      "currency": {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+64",
      "isoCode": "554"
    },
    {
      "name": "Nicaragua",
      "code": "NI",
      "capital": "Managua",
      "region": "NA",
      "currency": {
        "code": "NIO",
        "name": "Nicaraguan córdoba",
        "symbol": "C$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+505",
      "isoCode": "558"
    },
    {
      "name": "Niger",
      "code": "NE",
      "capital": "Niamey",
      "region": "AF",
      "currency": {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+227",
      "isoCode": "562"
    },
    {
      "name": "Nigeria",
      "code": "NG",
      "capital": "Abuja",
      "region": "AF",
      "currency": {
        "code": "NGN",
        "name": "Nigerian naira",
        "symbol": "₦"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+234",
      "isoCode": "566"
    },
    {
      "name": "Niue",
      "code": "NU",
      "capital": "Alofi",
      "region": "OC",
      "currency": {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+683",
      "isoCode": "570"
    },
    {
      "name": "Norfolk Island",
      "code": "NF",
      "capital": "Kingston",
      "region": "OC",
      "currency": {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+672",
      "isoCode": "574"
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "code": "KP",
      "capital": "Pyongyang",
      "region": "AS",
      "currency": {
        "code": "KPW",
        "name": "North Korean won",
        "symbol": "₩"
      },
      "language": {
        "code": "ko",
        "name": "Korean"
      },
      
      "dialling_code": "+850",
      "isoCode": "408"
    },
    {
      "name": "Northern Mariana Islands",
      "code": "MP",
      "capital": "Saipan",
      "region": "OC",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "580"
    },
    {
      "name": "Norway",
      "code": "NO",
      "capital": "Oslo",
      "region": "EU",
      "currency": {
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      },
      "language": {
        "code": "no",
        "name": "Norwegian"
      },
      
      "dialling_code": "+47",
      "isoCode": "578"
    },
    {
      "name": "Oman",
      "code": "OM",
      "capital": "Muscat",
      "region": "AS",
      "currency": {
        "code": "OMR",
        "name": "Omani rial",
        "symbol": "ر.ع."
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+968",
      "isoCode": "512"
    },
    {
      "name": "Pakistan",
      "code": "PK",
      "capital": "Islamabad",
      "region": "AS",
      "currency": {
        "code": "PKR",
        "name": "Pakistani rupee",
        "symbol": "₨"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+92",
      "isoCode": "586"
    },
    {
      "name": "Palau",
      "code": "PW",
      "capital": "Ngerulmud",
      "region": "OC",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+680",
      "isoCode": "585"
    },
    {
      "name": "Palestine, State of",
      "code": "PS",
      "capital": "Ramallah",
      "region": "AS",
      "currency": {
        "code": "ILS",
        "name": "Israeli new sheqel",
        "symbol": "₪"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+970",
      "isoCode": "275"
    },
    {
      "name": "Panama",
      "code": "PA",
      "capital": "Panama City",
      "region": "NA",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+507",
      "isoCode": "591"
    },
    {
      "name": "Papua New Guinea",
      "code": "PG",
      "capital": "Port Moresby",
      "region": "OC",
      "currency": {
        "code": "PGK",
        "name": "Papua New Guinean kina",
        "symbol": "K"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+675",
      "isoCode": "598"
    },
    {
      "name": "Paraguay",
      "code": "PY",
      "capital": "Asunción",
      "region": "SA",
      "currency": {
        "code": "PYG",
        "name": "Paraguayan guaraní",
        "symbol": "₲"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+595",
      "isoCode": "600"
    },
    {
      "name": "Peru",
      "code": "PE",
      "capital": "Lima",
      "region": "SA",
      "currency": {
        "code": "PEN",
        "name": "Peruvian sol",
        "symbol": "S/."
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+51",
      "isoCode": "604"
    },
    {
      "name": "Philippines",
      "code": "PH",
      "capital": "Manila",
      "region": "AS",
      "currency": {
        "code": "PHP",
        "name": "Philippine peso",
        "symbol": "₱"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+63",
      "isoCode": "608"
    },
    {
      "name": "Poland",
      "code": "PL",
      "capital": "Warsaw",
      "region": "EU",
      "currency": {
        "code": "PLN",
        "name": "Polish złoty",
        "symbol": "zł"
      },
      "language": {
        "code": "pl",
        "name": "Polish"
      },
      
      "dialling_code": "+48",
      "isoCode": "616"
    },
    {
      "name": "Portugal",
      "code": "PT",
      "capital": "Lisbon",
      "region": "EU",
      'image' : 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "pt",
        "name": "Portuguese"
      },
      
      "dialling_code": "+351",
      "isoCode": "620"
    },
    {
      "name": "Puerto Rico",
      "code": "PR",
      "capital": "San Juan",
      "region": "NA",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+1",
      "isoCode": "630"
    },
    {
      "name": "Qatar",
      "code": "QA",
      "capital": "Doha",
      "region": "AS",
      "currency": {
        "code": "QAR",
        "name": "Qatari riyal",
        "symbol": "ر.ق"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+974",
      "isoCode": "634"
    },
    {
      "name": "Republic of Kosovo",
      "code": "XK",
      "capital": "Pristina",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "sq",
        "name": "Albanian"
      },
      
      "dialling_code": "+381",
      "isoCode": "383"
    },
    {
      "name": "Réunion",
      "code": "RE",
      "capital": "Saint-Denis",
      "region": "AF",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+262",
      "isoCode": "638"
    },
    {
      "name": "Romania",
      "code": "RO",
      "capital": "Bucharest",
      "region": "EU",
      "currency": {
        "code": "RON",
        "name": "Romanian leu",
        "symbol": "lei"
      },
      "language": {
        "code": "ro",
        "name": "Romanian"
      },
      
      "dialling_code": "+40",
      "isoCode": "642"
    },
    {
      "name": "Russian Federation",
      "code": "RU",
      "capital": "Moscow",
      "region": "EU",
      'image': 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      "currency": {
        "code": "RUB",
        "name": "Russian ruble",
        "symbol": "₽"
      },
      "language": {
        "code": "ru",
        "name": "Russian"
      },
      
      "dialling_code": "+7",
      "isoCode": "643"
    },
    {
      "name": "Rwanda",
      "code": "RW",
      "capital": "Kigali",
      "region": "AF",
      "currency": {
        "code": "RWF",
        "name": "Rwandan franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "rw",
        "name": "Kinyarwanda"
      },
      
      "dialling_code": "+250",
      "isoCode": "646"
    },
    {
      "name": "Saint Barthélemy",
      "code": "BL",
      "capital": "Gustavia",
      "region": "NA",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+590",
      "isoCode": "652"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "code": "SH",
      "capital": "Jamestown",
      "region": "AF",
      "currency": {
        "code": "SHP",
        "name": "Saint Helena pound",
        "symbol": "£"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+290",
      "isoCode": "654"
    },
    {
      "name": "Saint Kitts and Nevis",
      "code": "KN",
      "capital": "Basseterre",
      "region": "NA",
      "currency": {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "659"
    },
    {
      "name": "Saint Lucia",
      "code": "LC",
      "capital": "Castries",
      "region": "NA",
      "currency": {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "662"
    },
    {
      "name": "Saint Martin (French part)",
      "code": "MF",
      "capital": "Marigot",
      "region": "NA",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+590",
      "isoCode": "663"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "code": "PM",
      "capital": "Saint-Pierre",
      "region": "NA",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+508",
      "isoCode": "666"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "code": "VC",
      "capital": "Kingstown",
      "region": "NA",
      "currency": {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "670"
    },
    {
      "name": "Samoa",
      "code": "WS",
      "capital": "Apia",
      "region": "OC",
      "currency": {
        "code": "WST",
        "name": "Samoan tālā",
        "symbol": "T"
      },
      "language": {
        "code": "sm",
        "name": "Samoan"
      },
      
      "dialling_code": "+685",
      "isoCode": "882"
    },
    {
      "name": "San Marino",
      "code": "SM",
      "capital": "City of San Marino",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "it",
        "name": "Italian"
      },
      
      "dialling_code": "+378",
      "isoCode": "674"
    },
    {
      "name": "Sao Tome and Principe",
      "code": "ST",
      "capital": "São Tomé",
      "region": "AF",
      "currency": {
        "code": "STD",
        "name": "São Tomé and Príncipe dobra",
        "symbol": "Db"
      },
      "language": {
        "code": "pt",
        "name": "Portuguese"
      },
      
      "dialling_code": "+239",
      "isoCode": "678"
    },
    {
      "name": "Saudi Arabia",
      "code": "SA",
      "capital": "Riyadh",
      "region": "AS",
      "currency": {
        "code": "SAR",
        "name": "Saudi riyal",
        "symbol": "ر.س"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+966",
      "isoCode": "682"
    },
    {
      "name": "Senegal",
      "code": "SN",
      "capital": "Dakar",
      "region": "AF",
      "currency": {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+221",
      "isoCode": "686"
    },
    {
      "name": "Serbia",
      "code": "RS",
      "capital": "Belgrade",
      "region": "EU",
      "currency": {
        "code": "RSD",
        "name": "Serbian dinar",
        "symbol": "дин."
      },
      "language": {
        "code": "sr",
        "name": "Serbian"
      },
      
      "dialling_code": "+381",
      "isoCode": "688"
    },
    {
      "name": "Seychelles",
      "code": "SC",
      "capital": "Victoria",
      "region": "AF",
      "currency": {
        "code": "SCR",
        "name": "Seychellois rupee",
        "symbol": "₨"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+248",
      "isoCode": "690"
    },
    {
      "name": "Sierra Leone",
      "code": "SL",
      "capital": "Freetown",
      "region": "AF",
      "currency": {
        "code": "SLL",
        "name": "Sierra Leonean leone",
        "symbol": "Le"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+232",
      "isoCode": "694"
    },
    {
      "name": "Singapore",
      "code": "SG",
      "capital": "Singapore",
      "region": "AS",
      "currency": {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+65",
      "isoCode": "702"
    },
    {
      "name": "Singapore",
      "code": "SG",
      "capital": "Singapore",
      "region": "AS",
      "currency": {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+65",
      "isoCode": "702"
    },
    {
      "name": "Slovakia",
      "code": "SK",
      "capital": "Bratislava",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "sk",
        "name": "Slovak"
      },
      
      "dialling_code": "+421",
      "isoCode": "703"
    },
    {
      "name": "Slovenia",
      "code": "SI",
      "capital": "Ljubljana",
      "region": "EU",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "sl",
        "name": "Slovene"
      },
      
      "dialling_code": "+386",
      "isoCode": "705"
    },
    {
      "name": "Solomon Islands",
      "code": "SB",
      "capital": "Honiara",
      "region": "OC",
      "currency": {
        "code": "SBD",
        "name": "Solomon Islands dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+677",
      "isoCode": "090"
    },
    {
      "name": "Somalia",
      "code": "SO",
      "capital": "Mogadishu",
      "region": "AF",
      "currency": {
        "code": "SOS",
        "name": "Somali shilling",
        "symbol": "Sh"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+252",
      "isoCode": "706"
    },
    {
      "name": "South Africa",
      "code": "ZA",
      "capital": "Pretoria",
      "region": "AF",
      "currency": {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      },
      "language": {
        "code": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      
      "dialling_code": "+27",
      "isoCode": "710"
    },
    {
      "name": "Korea (Republic of)",
      "code": "KR",
      "capital": "Seoul",
      "region": "AS",
      "currency": {
        "code": "KRW",
        "name": "South Korean won",
        "symbol": "₩"
      },
      "language": {
        "code": "ko",
        "name": "Korean"
      },
      
      "dialling_code": "+82",
      "isoCode": "410"
    },
    {
      "name": "Spain",
      "code": "ES",
      "capital": "Madrid",
      "region": "EU",
      'image':"https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+34",
      "isoCode": "724"
    },
    {
      "name": "Sri Lanka",
      "code": "LK",
      "capital": "Colombo",
      "region": "AS",
      "currency": {
        "code": "LKR",
        "name": "Sri Lankan rupee",
        "symbol": "Rs"
      },
      "language": {
        "code": "si",
        "iso639_2": "sin",
        "name": "Sinhalese",
        "nativeName": "සිංහල"
      },
      
      "dialling_code": "+94",
      "isoCode": "144"
    },
    {
      "name": "Sudan",
      "code": "SD",
      "capital": "Khartoum",
      "region": "AF",
      "currency": {
        "code": "SDG",
        "name": "Sudanese pound",
        "symbol": "ج.س."
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+249",
      "isoCode": "729"
    },
    {
      "name": "Suriname",
      "code": "SR",
      "capital": "Paramaribo",
      "region": "SA",
      "currency": {
        "code": "SRD",
        "name": "Surinamese dollar",
        "symbol": "$"
      },
      "language": {
        "code": "nl",
        "name": "Dutch"
      },
      
      "dialling_code": "+597",
      "isoCode": "740"
    },
    {
      "name": "Swaziland",
      "code": "SZ",
      "capital": "Lobamba",
      "region": "AF",
      "currency": {
        "code": "SZL",
        "name": "Swazi lilangeni",
        "symbol": "L"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+268",
      "isoCode": "748"
    },
    {
      "name": "Sweden",
      "code": "SE",
      "capital": "Stockholm",
      "region": "EU",
      "currency": {
        "code": "SEK",
        "name": "Swedish krona",
        "symbol": "kr"
      },
      "language": {
        "code": "sv",
        "name": "Swedish"
      },
      
      "dialling_code": "+46",
      "isoCode": "752"
    },
    {
      "name": "Switzerland",
      "code": "CH",
      "capital": "Bern",
      "region": "EU",
      'image':'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      "currency": {
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "de",
        "name": "German"
      },
      
      "dialling_code": "+41",
      "isoCode": "756"
    },
    {
      "name": "Syrian Arab Republic",
      "code": "SY",
      "capital": "Damascus",
      "region": "AS",
      "currency": {
        "code": "SYP",
        "name": "Syrian pound",
        "symbol": "£"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+963",
      "isoCode": "760"
    },
    {
      "name": "Taiwan",
      "code": "TW",
      "capital": "Taipei",
      "region": "AS",
      "currency": {
        "code": "TWD",
        "name": "New Taiwan dollar",
        "symbol": "$"
      },
      "language": {
        "code": "zh",
        "name": "Chinese"
      },
      
      "dialling_code": "+886",
      "isoCode": "158"
    },
    {
      "name": "Tajikistan",
      "code": "TJ",
      "capital": "Dushanbe",
      "region": "AS",
      "currency": {
        "code": "TJS",
        "name": "Tajikistani somoni",
        "symbol": "ЅМ"
      },
      "language": {
        "code": "tg",
        "name": "Tajik"
      },
      
      "dialling_code": "+992",
      "isoCode": "762"
    },
    {
      "name": "Tanzania, United Republic of",
      "code": "TZ",
      "capital": "Dodoma",
      "region": "AF",
      "currency": {
        "code": "TZS",
        "name": "Tanzanian shilling",
        "symbol": "Sh"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+255",
      "isoCode": "834"
    },
    {
      "name": "Thailand",
      "code": "TH",
      "capital": "Bangkok",
      "region": "AS",
      "currency": {
        "code": "THB",
        "name": "Thai baht",
        "symbol": "฿"
      },
      "language": {
        "code": "th",
        "name": "Thai"
      },
      
      "dialling_code": "+66",
      "isoCode": "764"
    },
    {
      "name": "Timor-Leste",
      "code": "TL",
      "capital": "Dili",
      "region": "AS",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "pt",
        "name": "Portuguese"
      },
      
      "dialling_code": "+670",
      "isoCode": "626"
    },
    {
      "name": "Togo",
      "code": "TG",
      "capital": "Lomé",
      "region": "AF",
      "currency": {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+228",
      "isoCode": "768"
    },
    {
      "name": "Tokelau",
      "code": "TK",
      "capital": "Fakaofo",
      "region": "OC",
      "currency": {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+690",
      "isoCode": "772"
    },
    {
      "name": "Tonga",
      "code": "TO",
      "capital": "Nuku'alofa",
      "region": "OC",
      "currency": {
        "code": "TOP",
        "name": "Tongan paʻanga",
        "symbol": "T$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+676",
      "isoCode": "776"
    },
    {
      "name": "Trinidad and Tobago",
      "code": "TT",
      "capital": "Port of Spain",
      "region": "SA",
      "currency": {
        "code": "TTD",
        "name": "Trinidad and Tobago dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "780"
    },
    {
      "name": "Tunisia",
      "code": "TN",
      "capital": "Tunis",
      "region": "AF",
      "currency": {
        "code": "TND",
        "name": "Tunisian dinar",
        "symbol": "د.ت"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+216",
      "isoCode": "788"
    },
    {
      "name": "Turkey",
      "code": "TR",
      "capital": "Ankara",
      "region": "AS",
      'image':'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
      "currency": {
        "code": "TRY",
        "name": "Turkish lira",
        "symbol": '₺'
      },
      "language": {
        "code": "tr",
        "name": "Turkish"
      },
      
      "dialling_code": "+90",
      "isoCode": "792"
    },
    {
      "name": "Turkmenistan",
      "code": "TM",
      "capital": "Ashgabat",
      "region": "AS",
      "currency": {
        "code": "TMT",
        "name": "Turkmenistan manat",
        "symbol": "m"
      },
      "language": {
        "code": "tk",
        "name": "Turkmen"
      },
      
      "dialling_code": "+993",
      "isoCode": "795"
    },
    {
      "name": "Turks and Caicos Islands",
      "code": "TC",
      "capital": "Cockburn Town",
      "region": "NA",
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "796"
    },
    {
      "name": "Tuvalu",
      "code": "TV",
      "capital": "Funafuti",
      "region": "OC",
      "currency": {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+688",
      "isoCode": "798"
    },
    {
      "name": "Uganda",
      "code": "UG",
      "capital": "Kampala",
      "region": "AF",
      "currency": {
        "code": "UGX",
        "name": "Ugandan shilling",
        "symbol": "Sh"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+256",
      "isoCode": "800"
    },
    {
      "name": "Ukraine",
      "code": "UA",
      "capital": "Kiev",
      "region": "EU",
      'image': 'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      "currency": {
        "code": "UAH",
        "name": "Ukrainian hryvnia",
        "symbol": "₴"
      },
      "language": {
        "code": "uk",
        "name": "Ukrainian"
      },
      
      "dialling_code": "+380",
      "isoCode": "804"
    },
    {
      "name": "United Arab Emirates",
      "code": "AE",
      "capital": "Abu Dhabi",
      "region": "AS",
      "currency": {
        "code": "AED",
        "name": "United Arab Emirates dirham",
        "symbol": "د.إ"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+971",
      "isoCode": "784"
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "code": "GB",
      "capital": "London",
      "region": "EU",
      'image':'https://images.unsplash.com/photo-1560452992-e3c28ffc6432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80',
      "currency": {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+44",
      "isoCode": "826"
    },
    {
      "name": "United States of America",
      "code": "US",
      "capital": "Washington, D.C.",
      "region": "NA",
      'image': 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      "currency": {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      "language": {
        "code": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      
      "dialling_code": "+1",
      "isoCode": "840"
    },
    {
      "name": "Uruguay",
      "code": "UY",
      "capital": "Montevideo",
      "region": "SA",
      "currency": {
        "code": "UYU",
        "name": "Uruguayan peso",
        "symbol": "$"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+598",
      "isoCode": "858"
    },
    {
      "name": "Uzbekistan",
      "code": "UZ",
      "capital": "Tashkent",
      "region": "AS",
      "currency": {
        "code": "UZS",
        "name": "Uzbekistani so'm",
        "symbol": null
      },
      "language": {
        "code": "uz",
        "name": "Uzbek"
      },
      
      "dialling_code": "+998",
      "isoCode": "860"
    },
    {
      "name": "Vanuatu",
      "code": "VU",
      "capital": "Port Vila",
      "region": "OC",
      "currency": {
        "code": "VUV",
        "name": "Vanuatu vatu",
        "symbol": "Vt"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+678",
      "isoCode": "548"
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "code": "VE",
      "capital": "Caracas",
      "region": "SA",
      "currency": {
        "code": "VEF",
        "name": "Venezuelan bolívar",
        "symbol": "Bs F"
      },
      "language": {
        "code": "es",
        "name": "Spanish"
      },
      
      "dialling_code": "+58",
      "isoCode": "862"
    },
    {
      "name": "Viet Nam",
      "code": "VN",
      "capital": "Hanoi",
      "region": "AS",
      "currency": {
        "code": "VND",
        "name": "Vietnamese đồng",
        "symbol": "₫"
      },
      "language": {
        "code": "vi",
        "name": "Vietnamese"
      },
      
      "dialling_code": "+84",
      "isoCode": "704"
    },
    {
      "name": "Wallis and Futuna",
      "code": "WF",
      "capital": "Mata-Utu",
      "region": "OC",
      "currency": {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+681",
      "isoCode": "876"
    },
    {
      "name": "Wallis and Futuna",
      "code": "WF",
      "capital": "Mata-Utu",
      "region": "OC",
      "currency": {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      },
      "language": {
        "code": "fr",
        "name": "French"
      },
      
      "dialling_code": "+681",
      "isoCode": "876"
    },
    {
      "name": "Yemen",
      "code": "YE",
      "capital": "Sana'a",
      "region": "AS",
      "currency": {
        "code": "YER",
        "name": "Yemeni rial",
        "symbol": "﷼"
      },
      "language": {
        "code": "ar",
        "name": "Arabic"
      },
      
      "dialling_code": "+967",
      "isoCode": "887"
    },
    {
      "name": "Zambia",
      "code": "ZM",
      "capital": "Lusaka",
      "region": "AF",
      "currency": {
        "code": "ZMW",
        "name": "Zambian kwacha",
        "symbol": "ZK"
      },
      "language": {
        "code": "en",
        "name": "English"
      },
      
      "dialling_code": "+260",
      "isoCode": "894"
    },
    {
      "name": "Zimbabwe",
      "code": "ZW",
      "capital": "Harare",
      "region": "AF",
      'image':'https://images.unsplash.com/photo-1627347456206-d3df7d8484b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 
      "currency": {
        "code": "BWP",
        "name": "Botswana pula",
        "symbol": "P"
      },
      "language": {
        "code": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      
      "dialling_code": "+263",
      "isoCode": "716"
    }
  ]

  

  if(id){
    return data.filter(card => card.code== id)
  }

  return data;
}