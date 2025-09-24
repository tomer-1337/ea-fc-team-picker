// Minimal local dataset for demo. In a real app, expand this array.
import {getCountryCodesByContinent} from "./countries.js";

export const TEAMS = [
    {
        id: 'parissaintgermain',
        name: 'Paris Saint-Germain',
        // logo: 'https://fifauteam.com/images/teams/PSG.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Paris%20Saint-Germain.png?raw=true',
        stars: 5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'fcbarcelona',
        name: 'FC Barcelona',
        // logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/FC%20Barcelona.png?raw=true',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/FC%20Barcelona.png?raw=true',
        stars: 5,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'realmadrid',
        name: 'Real Madrid',
        // logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Real%20Madrid.png?raw=true',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Real%20Madrid.png?raw=true',
        stars: 5,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'arsenal',
        name: 'Arsenal',
        // logo: 'https://fifauteam.com/images/teams/Arsenal.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Arsenal%20FC.png?raw=true',
        stars: 5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'liverpool',
        name: 'Liverpool',
        // logo: 'https://fifauteam.com/images/teams/Liverpool.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Liverpool%20FC.png?raw=true',
        stars: 5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'manchestercity',
        name: 'Manchester City',
        // logo: 'https://fifauteam.com/images/teams/ManchesterCity.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Manchester%20City.png?raw=true',
        stars: 5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'bayern',
        name: 'Bayern Munich',
        // logo: 'https://fifauteam.com/images/teams/Bayern.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/Bayern%20Munich.png?raw=true',
        stars: 5,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'inter',
        name: 'Inter',
        // logo: 'https://fifauteam.com/images/teams/Inter.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Inter%20Milan.png?raw=true',
        stars: 5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'atlticomadrid',
        name: 'Atlético Madrid',
        // logo: 'https://fifauteam.com/images/teams/AtleticoMadrid.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Atl%C3%A9tico%20de%20Madrid.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'chelsea',
        name: 'Chelsea',
        // logo: 'https://fifauteam.com/images/teams/Chelsea.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Chelsea%20FC.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'newcastleunited',
        name: 'Newcastle United',
        // logo: 'https://fifauteam.com/images/teams/NewcastleUnited.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Newcastle%20United.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'tottenham',
        name: 'Tottenham',
        // logo: 'https://fifauteam.com/images/teams/Tottenham.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Tottenham%20Hotspur.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'borussiadortmund',
        name: 'Borussia Dortmund',
        // logo: 'https://fifauteam.com/images/teams/BorussiaDortmund.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/Borussia%20Dortmund.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'napoli',
        name: 'Napoli',
        // logo: 'https://fifauteam.com/images/teams/Napoli.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/SSC%20Napoli.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'astonvilla',
        name: 'Aston Villa',
        // logo: 'https://fifauteam.com/images/teams/AstonVilla.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Aston%20Villa.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'manchesterunited',
        name: 'Manchester United',
        // logo: 'https://fifauteam.com/images/teams/ManchesterUnited.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Manchester%20United.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'bayerleverkusen',
        name: 'Bayer Leverkusen',
        // logo: 'https://fifauteam.com/images/teams/Leverkusen.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/Bayer%2004%20Leverkusen.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'rbleipzig',
        name: 'RB Leipzig',
        // logo: 'https://fifauteam.com/images/teams/RBLeipzig.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/RB%20Leipzig.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'juventus',
        name: 'Juventus',
        // logo: 'https://fifauteam.com/images/teams/Juventus.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Juventus%20FC.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'milan',
        name: 'Milan',
        // logo: 'https://fifauteam.com/images/teams/Milan.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/AC%20Milan.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'parissaintgermain',
        name: 'Paris Saint-Germain',
        // logo: 'https://fifauteam.com/images/teams/PSG.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Paris%20Saint-Germain.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'nottinghamforest',
        name: 'Nottingham Forest',
        // logo: 'https://fifauteam.com/images/teams/NottinghamForest.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Nottingham%20Forest.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'asroma',
        name: 'AS Roma',
        // logo: 'https://fifauteam.com/images/teams/Roma.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/AS%20Roma.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'atalanta',
        name: 'Atalanta',
        // logo: 'https://fifauteam.com/images/teams/Atalanta.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Atalanta%20BC.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'lazio',
        name: 'Lazio',
        // logo: 'https://fifauteam.com/images/teams/Lazio.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/SS%20Lazio.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'sporting',
        name: 'Sporting',
        // logo: 'https://fifauteam.com/images/teams/Sporting.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/Sporting%20CP.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'athleticbilbao',
        name: 'Athletic Bilbao',
        // logo: 'https://fifauteam.com/images/teams/Athletic.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Athletic%20Bilbao.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'galatasarayistanbul',
        name: 'Galatasaray Istanbul',
        // logo: 'https://fifauteam.com/images/teams/Galatasaray.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Galatasaray.png?raw=true',
        stars: 4.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'bournemouth',
        name: 'Bournemouth',
        // logo: 'https://fifauteam.com/images/teams/Bournemouth.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/AFC%20Bournemouth.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'brightonhovealbion',
        name: 'Brighton & Hove Albion',
        // logo: 'https://fifauteam.com/images/teams/Brighton.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Brighton%20%26%20Hove%20Albion.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'crystalpalace',
        name: 'Crystal Palace',
        // logo: 'https://fifauteam.com/images/teams/CrystalPalace.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Crystal%20Palace.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'westham',
        name: 'West Ham',
        // logo: 'https://fifauteam.com/images/teams/WestHam.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/West%20Ham%20United.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'asmonaco',
        name: 'AS Monaco',
        // logo: 'https://fifauteam.com/images/teams/Monaco.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/AS%20Monaco.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'olympiquedemarseille',
        name: 'Olympique de Marseille',
        // logo: 'https://fifauteam.com/images/teams/Marseille.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Olympique%20Marseille.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'eintrachtfrankfurt',
        name: 'Eintracht Frankfurt',
        // logo: 'https://fifauteam.com/images/teams/EintrachtFrankfurt.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/Eintracht%20Frankfurt.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'slbenfica',
        name: 'SL Benfica',
        // logo: 'https://fifauteam.com/images/teams/Benfica.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/SL%20Benfica.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'alhilal',
        name: 'Al Hilal',
        logo: 'https://fifauteam.com/images/teams/AlHilal.webp',
        stars: 4,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'realbetis',
        name: 'Real Betis',
        // logo: 'https://fifauteam.com/images/teams/Betis.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Real%20Betis%20Balompi%C3%A9.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'realsociedad',
        name: 'Real Sociedad',
        // logo: 'https://fifauteam.com/images/teams/RealSociedad.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Real%20Sociedad.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'villareal',
        name: 'Villareal',
        // logo: 'https://fifauteam.com/images/teams/Villareal.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Villarreal%20CF.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'fenerbaheistanbul',
        name: 'Fenerbahçe Istanbul',
        // logo: 'https://fifauteam.com/images/teams/Fenerbahce.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Fenerbahce.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'brentford',
        name: 'Brentford',
        // logo: 'https://fifauteam.com/images/teams/Brentford.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Brentford%20FC.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'fulham',
        name: 'Fulham',
        // logo: 'https://fifauteam.com/images/teams/Fulham.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Fulham%20FC.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'losclille',
        name: 'LOSC Lille',
        // logo: 'https://fifauteam.com/images/teams/LOSCLille.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/LOSC%20Lille.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'vfbstuttgart',
        name: 'VfB Stuttgart',
        // logo: 'https://fifauteam.com/images/teams/Stuttgart.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/VfB%20Stuttgart.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'vflwolfsburg',
        name: 'VfL Wolfsburg',
        // logo: 'https://fifauteam.com/images/teams/Wolfsburg.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/VfL%20Wolfsburg.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'bologna',
        name: 'Bologna',
        // logo: 'https://fifauteam.com/images/teams/Bologna.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Bologna%20FC%201909.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'fiorentina',
        name: 'Fiorentina',
        // logo: 'https://fifauteam.com/images/teams/Fiorentina.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/ACF%20Fiorentina.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'girona',
        name: 'Girona',
        // logo: 'https://fifauteam.com/images/teams/Girona.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Girona%20FC.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'mallorca',
        name: 'Mallorca',
        // logo: 'https://fifauteam.com/images/teams/Mallorca.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/RCD%20Mallorca.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'rayovallecano',
        name: 'Rayo Vallecano',
        // logo: 'https://fifauteam.com/images/teams/RayoVallecano.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Rayo%20Vallecano.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'parisfc',
        name: 'Paris FC',
        // logo: 'https://fifauteam.com/images/teams/ParisFC.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Paris%20FC.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'riverplate',
        name: 'River Plate',
        logo: 'https://fifauteam.com/images/teams/RiverPlate.webp',
        stars: 4,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'everton',
        name: 'Everton',
        // logo: 'https://fifauteam.com/images/teams/Everton.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Everton%20FC.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'leedsunited',
        name: 'Leeds United',
        // logo: 'https://fifauteam.com/images/teams/Leeds.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Leeds%20United.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'wolverhampton',
        name: 'Wolverhampton',
        // logo: 'https://fifauteam.com/images/teams/Wolves.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Wolverhampton%20Wanderers.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'ogcnice',
        name: 'OGC Nice',
        // logo: 'https://fifauteam.com/images/teams/Nice.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/OGC%20Nice.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'olympiquelyonnais',
        name: 'Olympique Lyonnais',
        // logo: 'https://fifauteam.com/images/teams/Lyon.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Olympique%20Lyon.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'staderennaisfc',
        name: 'Stade Rennais FC',
        // logo: 'https://fifauteam.com/images/teams/Rennais.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Stade%20Rennais%20FC.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'borussiamnchengladbach',
        name: 'Borussia Mönchengladbach',
        // logo: 'https://fifauteam.com/images/teams/Mgladbach.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/Borussia%20M%C3%B6nchengladbach.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'scfreiburg',
        name: 'SC Freiburg',
        // logo: 'https://fifauteam.com/images/teams/Freiburg.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/SC%20Freiburg.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'torino',
        name: 'Torino',
        // logo: 'https://fifauteam.com/images/teams/Torino.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Torino%20FC.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'psv',
        name: 'PSV',
        // logo: 'https://fifauteam.com/images/teams/PSV.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/PSV%20Eindhoven.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'fcporto',
        name: 'FC Porto',
        // logo: 'https://fifauteam.com/images/teams/FCPorto.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/FC%20Porto.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'alnassr',
        name: 'Al Nassr',
        logo: 'https://fifauteam.com/images/teams/AlNassr.webp',
        stars: 4,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'celtavigo',
        name: 'Celta Vigo',
        // logo: 'https://fifauteam.com/images/teams/Celta.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Celta%20de%20Vigo.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'getafe',
        name: 'Getafe',
        // logo: 'https://fifauteam.com/images/teams/Getafe.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Getafe%20CF.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'osasuna',
        name: 'Osasuna',
        // logo: 'https://fifauteam.com/images/teams/Osasuna.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/CA%20Osasuna.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'sevilla',
        name: 'Sevilla',
        // logo: 'https://fifauteam.com/images/teams/Sevilla.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Sevilla%20FC.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'valencia',
        name: 'Valencia',
        // logo: 'https://fifauteam.com/images/teams/Valencia.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Valencia%20CF.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'beiktaistanbul',
        name: 'Beşiktaş Istanbul',
        // logo: 'https://fifauteam.com/images/teams/Besiktas.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Besiktas%20JK.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'bocajuniors',
        name: 'Boca Juniors',
        logo: 'https://fifauteam.com/images/teams/BocaJuniors.webp',
        stars: 4,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: '1899hoffenheim',
        name: '1899 Hoffenheim',
        // logo: 'https://fifauteam.com/images/teams/Hoffenheim.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/TSG%201899%20Hoffenheim.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'fcaugsburg',
        name: 'FC Augsburg',
        // logo: 'https://fifauteam.com/images/teams/Augsburg.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/FC%20Augsburg.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'mainz05',
        name: 'Mainz 05',
        // logo: 'https://fifauteam.com/images/teams/Mainz.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/1.FSV%20Mainz%2005.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'svwerderbremen',
        name: 'SV Werder Bremen',
        // logo: 'https://fifauteam.com/images/teams/WerderBremen.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/SV%20Werder%20Bremen.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'como',
        name: 'Como',
        // logo: 'https://fifauteam.com/images/teams/Como.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Como%201907.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'ajax',
        name: 'Ajax',
        // logo: 'https://fifauteam.com/images/teams/Ajax.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/Ajax%20Amsterdam.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'feyenoord',
        name: 'Feyenoord',
        // logo: 'https://fifauteam.com/images/teams/Feyenoord.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/Feyenoord%20Rotterdam.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'sportingdebraga',
        name: 'Sporting de Braga',
        // logo: 'https://fifauteam.com/images/teams/Braga.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/SC%20Braga.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'alittihad',
        name: 'Al Ittihad',
        logo: 'https://fifauteam.com/images/teams/AlIttihad.webp',
        stars: 4,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'celtic',
        name: 'Celtic',
        // logo: 'https://fifauteam.com/images/teams/Celtic.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Scotland%20-%20Scottish%20Premiership/Celtic%20FC.png?raw=true',
        stars: 4,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'racingclub',
        name: 'Racing Club',
        logo: 'https://fifauteam.com/images/teams/Racing.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'clubbrugge',
        name: 'Club Brugge',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/Club%20Brugge%20KV.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'burnley',
        name: 'Burnley',
        // logo: 'https://fifauteam.com/images/teams/Burnley.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Burnley%20FC.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'sunderland',
        name: 'Sunderland',
        // logo: 'https://fifauteam.com/images/teams/Sunderland.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/England%20-%20Premier%20League/Sunderland%20AFC.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Premier League',
        country: 'EN'
    },
    {
        id: 'ipswichtown',
        name: 'Ipswich Town',
        logo: 'https://fifauteam.com/images/teams/Ipswich.webp',
        stars: 3.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'leicestercity',
        name: 'Leicester City',
        logo: 'https://fifauteam.com/images/teams/LeicesterCity.webp',
        stars: 3.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'racingclubdelens',
        name: 'Racing Club de Lens',
        // logo: 'https://fifauteam.com/images/teams/Lens.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/RC%20Lens.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'rcstrasbourgalsace',
        name: 'RC Strasbourg Alsace',
        // logo: 'https://fifauteam.com/images/teams/Cambridge.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/RC%20Strasbourg%20Alsace.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'unionberlin',
        name: 'Union Berlin',
        // logo: 'https://fifauteam.com/images/teams/UnionBerlin.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/1.FC%20Union%20Berlin.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'alahli',
        name: 'Al Ahli',
        logo: 'https://fifauteam.com/images/teams/AlAhli.webp',
        stars: 3.5,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'espanyol',
        name: 'Espanyol',
        // logo: 'https://fifauteam.com/images/teams/Espanyol.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/RCD%20Espanyol%20Barcelona.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'trabzonspor',
        name: 'Trabzonspor',
        // logo: 'https://fifauteam.com/images/teams/Trabzonspor.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Trabzonspor.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'estudiantes',
        name: 'Estudiantes',
        logo: 'https://fifauteam.com/images/teams/Estudiantes.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'sarmiento',
        name: 'Sarmiento',
        logo: 'https://fifauteam.com/images/teams/Sarmiento.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'talleres',
        name: 'Talleres',
        logo: 'https://fifauteam.com/images/teams/Talleres.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'vlezsarsfield',
        name: 'Vélez Sarsfield',
        logo: 'https://fifauteam.com/images/teams/Velez.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'genk',
        name: 'Genk',
        // logo: 'https://fifauteam.com/images/teams/Genk.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/KRC%20Genk.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'unionsg',
        name: 'Union SG',
        // logo: 'https://fifauteam.com/images/teams/UnionSG.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/Union%20Saint-Gilloise.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'southampton',
        name: 'Southampton',
        logo: 'https://fifauteam.com/images/teams/Southampton.webp',
        stars: 3.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'toulousefc',
        name: 'Toulouse FC',
        // logo: 'https://fifauteam.com/images/teams/Toulouse.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/FC%20Toulouse.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: '1fckln',
        name: '1. FC Köln',
        // logo: 'https://fifauteam.com/images/teams/Koln.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/1.FC%20K%C3%B6ln.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'genoa',
        name: 'Genoa',
        // logo: 'https://fifauteam.com/images/teams/Genoa.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Genoa%20CFC.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'sassuolo',
        name: 'Sassuolo',
        // logo: 'https://fifauteam.com/images/teams/Sassuolo.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/US%20Sassuolo.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'udinese',
        name: 'Udinese',
        // logo: 'https://fifauteam.com/images/teams/Udinese.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Udinese%20Calcio.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'az',
        name: 'AZ',
        // logo: 'https://fifauteam.com/images/teams/AZ.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/AZ%20Alkmaar.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'alqadsiah',
        name: 'Al-Qadsiah',
        logo: 'https://fifauteam.com/images/teams/AlQadsiah.webp',
        stars: 3.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'rangers',
        name: 'Rangers',
        // logo: 'https://fifauteam.com/images/teams/Rangers.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Scotland%20-%20Scottish%20Premiership/Rangers%20FC.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'alavs',
        name: 'Alavés',
        // logo: 'https://fifauteam.com/images/teams/Alaves.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Deportivo%20Alav%C3%A9s.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'intermiamicf',
        name: 'Inter Miami CF',
        logo: 'https://fifauteam.com/images/teams/Miami.webp',
        stars: 3.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'belgrano',
        name: 'Belgrano',
        logo: 'https://fifauteam.com/images/teams/Belgrano.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'lans',
        name: 'Lanús',
        logo: 'https://fifauteam.com/images/teams/Lanus.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'rosariocentral',
        name: 'Rosario Central',
        logo: 'https://fifauteam.com/images/teams/RosarioCentral.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'rscanderlecht',
        name: 'R.S.C Anderlecht',
        // logo: 'https://fifauteam.com/images/teams/Anderlecht.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/RSC%20Anderlecht.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'fckbenhavn',
        name: 'FC København',
        // logo: 'https://fifauteam.com/images/teams/Kobenhavn.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Denmark%20-%20Superliga/FC%20Copenhagen.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'birminghamcity',
        name: 'Birmingham City',
        logo: 'https://fifauteam.com/images/teams/Birmingham.webp',
        stars: 3.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'auxerre',
        name: 'Auxerre',
        // logo: 'https://fifauteam.com/images/teams/Auxerre.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/AJ%20Auxerre.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'fcnantes',
        name: 'FC Nantes',
        // logo: 'https://fifauteam.com/images/teams/Nantes.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/FC%20Nantes.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'parisfc',
        name: 'Paris FC',
        // logo: 'https://fifauteam.com/images/teams/ParisFC.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Paris%20FC.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'stadebrestois29',
        name: 'Stade Brestois 29',
        // logo: 'https://fifauteam.com/images/teams/Brestois.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Stade%20Brestois%2029.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'stadedereims',
        name: 'Stade de Reims',
        logo: 'https://fifauteam.com/images/teams/Reims.webp',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: '1fcheidenheim',
        name: '1. FC Heidenheim',
        // logo: 'https://fifauteam.com/images/teams/Heidenheim.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/1.FC%20Heidenheim%201846.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'hamburgersv',
        name: 'Hamburger SV',
        // logo: 'https://fifauteam.com/images/teams/Hamburg.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/Hamburger%20SV.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'cagliari',
        name: 'Cagliari',
        // logo: 'https://fifauteam.com/images/teams/Cagliari.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Cagliari%20Calcio.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'cremonese',
        name: 'Cremonese',
        // logo: 'https://fifauteam.com/images/teams/Cremonese.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/US%20Cremonese.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'hellasverona',
        name: 'Hellas Verona',
        // logo: 'https://fifauteam.com/images/teams/HellasVerona.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Hellas%20Verona.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'lecce',
        name: 'Lecce',
        // logo: 'https://fifauteam.com/images/teams/Lecce.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/US%20Lecce.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'parma',
        name: 'Parma',
        // logo: 'https://fifauteam.com/images/teams/Parma.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Parma%20Calcio%201913.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'palermo',
        name: 'Palermo',
        logo: 'https://fifauteam.com/images/teams/Palermo.webp',
        stars: 3.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'twente',
        name: 'Twente',
        // logo: 'https://fifauteam.com/images/teams/Twente.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/Twente%20Enschede%20FC.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'levante',
        name: 'Levante',
        // logo: 'https://fifauteam.com/images/teams/Levante.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Levante%20UD.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'realoviedo',
        name: 'Real Oviedo',
        // logo: 'https://fifauteam.com/images/teams/Oviedo.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Real%20Oviedo.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'almera',
        name: 'Almería',
        logo: 'https://fifauteam.com/images/teams/Almeria.webp',
        stars: 3.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'istanbulbaakehirfk',
        name: 'Istanbul Başakşehir FK',
        // logo: 'https://fifauteam.com/images/teams/Basaksehir.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Basaksehir%20FK.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'montpellierhsc',
        name: 'Montpellier HSC',
        logo: 'https://fifauteam.com/images/teams/Montpellier.webp',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'olympiquedemarseille',
        name: 'Olympique de Marseille',
        // logo: 'https://fifauteam.com/images/teams/Marseille.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Olympique%20Marseille.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'argentinosjrs',
        name: 'Argentinos Jrs',
        logo: 'https://fifauteam.com/images/teams/Argentinos.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'huracn',
        name: 'Huracán',
        logo: 'https://fifauteam.com/images/teams/Huracan.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'independiente',
        name: 'Independiente',
        logo: 'https://fifauteam.com/images/teams/Independiente.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'newells',
        name: 'Newell’s',
        logo: 'https://fifauteam.com/images/teams/Newells.webp',
        stars: 3.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'fcredbullsalzburg',
        name: 'FC Red Bull Salzburg',
        // logo: 'https://fifauteam.com/images/teams/RBSalzburg.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Austria%20-%20Bundesliga/Red%20Bull%20Salzburg.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'fcmidtjylland',
        name: 'FC Midtjylland',
        // logo: 'https://fifauteam.com/images/teams/Midtjylland.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Denmark%20-%20Superliga/FC%20Midtjylland.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'bristolcity',
        name: 'Bristol City',
        logo: 'https://fifauteam.com/images/teams/BristolCity.webp',
        stars: 3.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'coventrycity',
        name: 'Coventry City',
        logo: 'https://fifauteam.com/images/teams/Coventry.webp',
        stars: 3.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'middlesbrough',
        name: 'Middlesbrough',
        logo: 'https://fifauteam.com/images/teams/Middlesbrough.webp',
        stars: 3.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'norwich',
        name: 'Norwich',
        logo: 'https://fifauteam.com/images/teams/Norwich.webp',
        stars: 3.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'sheffieldunited',
        name: 'Sheffield United',
        logo: 'https://fifauteam.com/images/teams/SheffieldUnited.webp',
        stars: 3.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'angerssco',
        name: 'Angers SCO',
        // logo: 'https://fifauteam.com/images/teams/Angers.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Angers%20SCO.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'fclorient',
        name: 'FC Lorient',
        // logo: 'https://fifauteam.com/images/teams/ Lorient.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/FC%20Lorient.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'montpellierhsc',
        name: 'Montpellier HSC',
        logo: 'https://fifauteam.com/images/teams/Montpellier.webp',
        stars: 3.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'fcstpauli',
        name: 'FC St. Pauli',
        // logo: 'https://fifauteam.com/images/teams/StPauli.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Germany%20-%20Bundesliga/FC%20St.%20Pauli.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Bundesliga',
        country: 'DE'
    },
    {
        id: 'vflbochum',
        name: 'VfL Bochum',
        logo: 'https://fifauteam.com/images/teams/Bochum.webp',
        stars: 3.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'monza',
        name: 'Monza',
        logo: 'https://fifauteam.com/images/teams/Monza.webp',
        stars: 3.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'venezia',
        name: 'Venezia',
        logo: 'https://fifauteam.com/images/teams/Venezia.webp',
        stars: 3.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'fcutrecht',
        name: 'FC Utrecht',
        // logo: 'https://fifauteam.com/images/teams/Utrecht.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/FC%20Utrecht.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'vitriadeguimares',
        name: 'Vitória de Guimarães',
        // logo: 'https://fifauteam.com/images/teams/Guimaraes.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/Vit%C3%B3ria%20Guimar%C3%A3es%20SC.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'laspalmas',
        name: 'Las Palmas',
        logo: 'https://fifauteam.com/images/teams/LasPalmas.webp',
        stars: 3.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'bscyoungboys',
        name: 'BSC Young Boys',
        // logo: 'https://fifauteam.com/images/teams/YoungBoys.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Switzerland%20-%20Super%20League/BSC%20Young%20Boys.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'fcbasel',
        name: 'FC Basel',
        // logo: 'https://fifauteam.com/images/teams/Basel.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Switzerland%20-%20Super%20League/FC%20Basel%201893.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'eypspor',
        name: 'Eyüpspor',
        // logo: 'https://fifauteam.com/images/teams/Eyupsor.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Ey%C3%BCpspor.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'samsunspor',
        name: 'Samsunspor',
        // logo: 'https://fifauteam.com/images/teams/Samsunspor.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Samsunspor.png?raw=true',
        stars: 3.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'fccincinnati',
        name: 'FC Cincinnati',
        logo: 'https://fifauteam.com/images/teams/Cincinnati.webp',
        stars: 3.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'seattlesoundersfc',
        name: 'Seattle Sounders FC',
        logo: 'https://fifauteam.com/images/teams/SeattleSounders.webp',
        stars: 3.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'atlticotucumn',
        name: 'Atlético Tucumán',
        logo: 'https://fifauteam.com/images/teams/Tucuman.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'defensayjusticia',
        name: 'Defensa y Justicia',
        logo: 'https://fifauteam.com/images/teams/Defensa.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'gimnasia',
        name: 'Gimnasia',
        logo: 'https://fifauteam.com/images/teams/Gimnasia.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'godoycruz',
        name: 'Godoy Cruz',
        logo: 'https://fifauteam.com/images/teams/GodoyCruz.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'gent',
        name: 'Gent',
        // logo: 'https://fifauteam.com/images/teams/Gent.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/KAA%20Gent.png?raw=true',
        stars: 3,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'kvwesterlo',
        name: 'KV Westerlo',
        // logo: 'https://fifauteam.com/images/teams/Westerlo.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/KVC%20Westerlo.png?raw=true',
        stars: 3,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'mechelen',
        name: 'Mechelen',
        // logo: 'https://fifauteam.com/images/teams/Mechelen.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/KV%20Mechelen.png?raw=true',
        stars: 3,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'royalantwerp',
        name: 'Royal Antwerp',
        // logo: 'https://fifauteam.com/images/teams/Antwerp.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/Royal%20Antwerp%20FC.png?raw=true',
        stars: 3,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'hullcity',
        name: 'Hull City',
        logo: 'https://fifauteam.com/images/teams/HullCity.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'millwall',
        name: 'Millwall',
        logo: 'https://fifauteam.com/images/teams/Millwall.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'queensparkrangers',
        name: 'Queens Park Rangers',
        logo: 'https://fifauteam.com/images/teams/QPR.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'stokecity',
        name: 'Stoke City',
        logo: 'https://fifauteam.com/images/teams/Stoke.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'watford',
        name: 'Watford',
        logo: 'https://fifauteam.com/images/teams/Watford.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'westbromwichalbion',
        name: 'West Bromwich Albion',
        logo: 'https://fifauteam.com/images/teams/WestBrom.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'lutontown',
        name: 'Luton Town',
        logo: 'https://fifauteam.com/images/teams/Luton.webp',
        stars: 3,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'fcmetz',
        name: 'FC Metz',
        // logo: 'https://fifauteam.com/images/teams/Metz.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/FC%20Metz.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'havreac',
        name: 'Havre AC',
        // logo: 'https://fifauteam.com/images/teams/Havre.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/Le%20Havre%20AC.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'assainttienne',
        name: 'AS Saint-Étienne',
        logo: 'https://fifauteam.com/images/teams/ASSE.webp',
        stars: 3,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'darmstadt98',
        name: 'Darmstadt 98',
        logo: 'https://fifauteam.com/images/teams/Darmstadt.webp',
        stars: 3,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'herthabsc',
        name: 'Hertha BSC',
        logo: 'https://fifauteam.com/images/teams/Hertha.webp',
        stars: 3,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'holsteinkiel',
        name: 'Holstein Kiel',
        logo: 'https://fifauteam.com/images/teams/Kiel.webp',
        stars: 3,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'pisa',
        name: 'Pisa',
        // logo: 'https://fifauteam.com/images/teams/Pisa.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Italy%20-%20Serie%20A/Pisa%20Sporting%20Club.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Serie A',
        country: 'IT'
    },
    {
        id: 'necnijmegen',
        name: 'NEC Nijmegen',
        // logo: 'https://fifauteam.com/images/teams/NEC.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/NEC%20Nijmegen.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'bodglimt',
        name: 'Bodø/Glimt',
        // logo: 'https://fifauteam.com/images/teams/Glimt.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Norway%20-%20Eliteserien/FK%20Bod%C3%B8Glimt.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'lechpozna',
        name: 'Lech Poznań',
        // logo: 'https://fifauteam.com/images/teams/LechPoznan.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Poland%20-%20PKO%20BP%20Ekstraklasa/Lech%20Poznan.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'rakwczstochowa',
        name: 'Raków Częstochowa',
        // logo: 'https://fifauteam.com/images/teams/Czestochowa.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Poland%20-%20PKO%20BP%20Ekstraklasa/Rak%C3%B3w%20Cz%C4%99stochowa.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'estoril',
        name: 'Estoril',
        // logo: 'https://fifauteam.com/images/teams/Estoril.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/GD%20Estoril%20Praia.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'famalico',
        name: 'Famalicão',
        // logo: 'https://fifauteam.com/images/teams/Famalicao.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/FC%20Famalic%C3%A3o.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'santaclara',
        name: 'Santa Clara',
        // logo: 'https://fifauteam.com/images/teams/SantaClara.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/CD%20Santa%20Clara.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'fcsb',
        name: 'FCSB',
        logo: 'https://fifauteam.com/images/teams/SteauaBucareste.webp',
        stars: 3,
        type: 'club',
        division: 'Superliga',
        country: 'DK'
    },
    {
        id: 'elche',
        name: 'Elche',
        // logo: 'https://fifauteam.com/images/teams/Elche.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Spain%20-%20LaLiga/Elche%20CF.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Laliga Ea Sports',
        country: 'ES'
    },
    {
        id: 'cdiz',
        name: 'Cádiz',
        logo: 'https://fifauteam.com/images/teams/Cadiz.webp',
        stars: 3,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'deportivolacorua',
        name: 'Deportivo La Coruña',
        logo: 'https://fifauteam.com/images/teams/Deportivo.webp',
        stars: 3,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'legans',
        name: 'Leganés',
        logo: 'https://fifauteam.com/images/teams/Leganes.webp',
        stars: 3,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'sportingdegijn',
        name: 'Sporting de Gijón',
        logo: 'https://fifauteam.com/images/teams/SportingGijon.webp',
        stars: 3,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'zaragoza',
        name: 'Zaragoza',
        logo: 'https://fifauteam.com/images/teams/Zaragoza.webp',
        stars: 3,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'malmff',
        name: 'Malmö FF',
        // logo: 'https://fifauteam.com/images/teams/Malmo.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Sweden%20-%20Allsvenskan/Malm%C3%B6%20FF.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'atlantaunited',
        name: 'Atlanta United',
        logo: 'https://fifauteam.com/images/teams/Atlanta.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'charlottefc',
        name: 'Charlotte FC',
        logo: 'https://fifauteam.com/images/teams/Charlotte.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'columbuscrewsc',
        name: 'Columbus Crew SC',
        logo: 'https://fifauteam.com/images/teams/ColumbusCrew.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'lagalaxy',
        name: 'LA Galaxy',
        logo: 'https://fifauteam.com/images/teams/LAGalaxy.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'losangelesfc',
        name: 'Los Angeles FC',
        logo: 'https://fifauteam.com/images/teams/LAFC.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'vancouverwhitecapsfc',
        name: 'Vancouver Whitecaps FC',
        logo: 'https://fifauteam.com/images/teams/Whitecaps.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'rcstrasbourgalsace',
        name: 'RC Strasbourg Alsace',
        // logo: 'https://fifauteam.com/images/teams/Cambridge.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/RC%20Strasbourg%20Alsace.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'banfield',
        name: 'Banfield',
        logo: 'https://fifauteam.com/images/teams/Banfield.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'barracascentral',
        name: 'Barracas Central',
        logo: 'https://fifauteam.com/images/teams/BarracasCentral.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'centralcrdoba',
        name: 'Central Córdoba',
        logo: 'https://fifauteam.com/images/teams/Cordoba.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'independienterivadavia',
        name: 'Independiente Rivadavia',
        logo: 'https://fifauteam.com/images/teams/IndependienteRivadavia.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'instituto',
        name: 'Instituto',
        logo: 'https://fifauteam.com/images/teams/InstitutoCordoba.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'platense',
        name: 'Platense',
        logo: 'https://fifauteam.com/images/teams/Platense.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'sanlorenzo',
        name: 'San Lorenzo',
        logo: 'https://fifauteam.com/images/teams/SanLorenzo.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'unin',
        name: 'Unión',
        logo: 'https://fifauteam.com/images/teams/Union.webp',
        stars: 3,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'fkaustriawien',
        name: 'FK Austria Wien',
        // logo: 'https://fifauteam.com/images/teams/AustriaWien.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Austria%20-%20Bundesliga/Austria%20Vienna.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'skrapidwien',
        name: 'SK Rapid Wien',
        // logo: 'https://fifauteam.com/images/teams/RapidWien.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Austria%20-%20Bundesliga/Rapid%20Vienna.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'sksturmgraz',
        name: 'SK Sturm Graz',
        // logo: 'https://fifauteam.com/images/teams/SturmGraz.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Austria%20-%20Bundesliga/SK%20Sturm%20Graz.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'charleroi',
        name: 'Charleroi',
        // logo: 'https://fifauteam.com/images/teams/Charleroi.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/Royal%20Charleroi%20SC.png?raw=true',
        stars: 3,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'leuven',
        name: 'Leuven',
        // logo: 'https://fifauteam.com/images/teams/Leuven.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/Oud-Heverlee%20Leuven.png?raw=true',
        stars: 3,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'standardlige',
        name: 'Standard Liège',
        // logo: 'https://fifauteam.com/images/teams/StandardLiege.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/Standard%20Li%C3%A8ge.png?raw=true',
        stars: 3,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'aarhusgf',
        name: 'Aarhus GF',
        // logo: 'https://fifauteam.com/images/teams/Aarhus.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Denmark%20-%20Superliga/Aarhus%20GF.png?raw=true',
        stars: 3,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'blackburnrovers',
        name: 'Blackburn Rovers',
        logo: 'https://fifauteam.com/images/teams/BlackburnRovers.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'derbycounty',
        name: 'Derby County',
        logo: 'https://fifauteam.com/images/teams/Derby.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'oxfordunited',
        name: 'Oxford United',
        logo: 'https://fifauteam.com/images/teams/OxfordUnited.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'prestonnorthend',
        name: 'Preston North End',
        logo: 'https://fifauteam.com/images/teams/Preston.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'swanseacity',
        name: 'Swansea City',
        logo: 'https://fifauteam.com/images/teams/Swansea.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'wrexham',
        name: 'Wrexham',
        logo: 'https://fifauteam.com/images/teams/Wrexham.webp',
        stars: 3,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: '1fckaiserslautern',
        name: '1. FC Kaiserslautern',
        logo: 'https://fifauteam.com/images/teams/Kaiserslautern.webp',
        stars: 3,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'fortunadsseldorf',
        name: 'Fortuna Düsseldorf',
        logo: 'https://fifauteam.com/images/teams/Dusseldorf.webp',
        stars: 3,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'hannover96',
        name: 'Hannover 96',
        logo: 'https://fifauteam.com/images/teams/Hannover.webp',
        stars: 3,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'modena',
        name: 'Modena',
        logo: 'https://fifauteam.com/images/teams/Modena.webp',
        stars: 3,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'sampdoria',
        name: 'Sampdoria',
        logo: 'https://fifauteam.com/images/teams/Sampdoria.webp',
        stars: 3,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'spezia',
        name: 'Spezia',
        logo: 'https://fifauteam.com/images/teams/Spezia.webp',
        stars: 3,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'ulsanhyundai',
        name: 'Ulsan Hyundai',
        logo: 'https://fifauteam.com/images/teams/Ulsan.webp',
        stars: 3,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'goaheadeagles',
        name: 'Go Ahead Eagles',
        // logo: 'https://fifauteam.com/images/teams/GoAheadEagles.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/Go%20Ahead%20Eagles.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'molde',
        name: 'Molde',
        // logo: 'https://fifauteam.com/images/teams/Molde.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Norway%20-%20Eliteserien/Molde%20FK.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'legiawarszawa',
        name: 'Legia Warszawa',
        // logo: 'https://fifauteam.com/images/teams/LegiaWarszawa.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Poland%20-%20PKO%20BP%20Ekstraklasa/Legia%20Warszawa.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'arouca',
        name: 'Arouca',
        // logo: 'https://fifauteam.com/images/teams/Arouca.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/FC%20Arouca.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'casapia',
        name: 'Casa Pia',
        // logo: 'https://fifauteam.com/images/teams/CasaPia.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/Casa%20Pia%20AC.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'gilvicente',
        name: 'Gil Vicente',
        // logo: 'https://fifauteam.com/images/teams/GilVicente.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/Gil%20Vicente%20FC.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'rioave',
        name: 'Rio Ave',
        // logo: 'https://fifauteam.com/images/teams/RioAve.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/Rio%20Ave%20FC.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'altaawoun',
        name: 'Al Taawoun',
        logo: 'https://fifauteam.com/images/teams/AlTaawoun.webp',
        stars: 3,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'ettifaqfc',
        name: 'Ettifaq FC',
        logo: 'https://fifauteam.com/images/teams/Ettifaq.webp',
        stars: 3,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'neom',
        name: 'Neom',
        logo: 'https://fifauteam.com/images/teams/Neom.webp',
        stars: 3,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'crdobacf',
        name: 'Córdoba CF',
        logo: 'https://fifauteam.com/images/teams/CordobaCF.webp',
        stars: 3,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'eibar',
        name: 'Eibar',
        logo: 'https://fifauteam.com/images/teams/Eibar.webp',
        stars: 3,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'racingsantander',
        name: 'Racing Santander',
        logo: 'https://fifauteam.com/images/teams/RacingSantander.webp',
        stars: 3,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'valladolid',
        name: 'Valladolid',
        logo: 'https://fifauteam.com/images/teams/Valladolid.webp',
        stars: 3,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'fclugano',
        name: 'FC Lugano',
        // logo: 'https://fifauteam.com/images/teams/Lugano.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Switzerland%20-%20Super%20League/FC%20Lugano.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'fcstgallen',
        name: 'FC St. Gallen',
        // logo: 'https://fifauteam.com/images/teams/StGallen.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Switzerland%20-%20Super%20League/FC%20St.%20Gallen%201879.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'servettefc',
        name: 'Servette FC',
        // logo: 'https://fifauteam.com/images/teams/Servette.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Switzerland%20-%20Super%20League/Servette%20FC.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'alanyaspor',
        name: 'Alanyaspor',
        // logo: 'https://fifauteam.com/images/teams/Alanyaspor.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Alanyaspor.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'gaziehirgaziantepfk',
        name: 'Gazişehir Gaziantep FK',
        // logo: 'https://fifauteam.com/images/teams/Gaziantep.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Gaziantep%20FK.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'konyaspor',
        name: 'Konyaspor',
        // logo: 'https://fifauteam.com/images/teams/Konyaspor.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Konyaspor.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'aykurrizespor',
        name: 'Çaykur Rizespor',
        // logo: 'https://fifauteam.com/images/teams/Rizespor.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Caykur%20Rizespor.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'austinfc',
        name: 'Austin FC',
        logo: 'https://fifauteam.com/images/teams/Austin.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'chicagofire',
        name: 'Chicago Fire',
        logo: 'https://fifauteam.com/images/teams/ChicagoFire.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'minnesotaunitedfc',
        name: 'Minnesota United FC',
        logo: 'https://fifauteam.com/images/teams/Minnesota.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'nashvillesc',
        name: 'Nashville SC',
        logo: 'https://fifauteam.com/images/teams/Nashville.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'newenglandrevolution',
        name: 'New England Revolution',
        logo: 'https://fifauteam.com/images/teams/NewEngland.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'newyorkredbulls',
        name: 'New York Red Bulls',
        logo: 'https://fifauteam.com/images/teams/NYRedBulls.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'orlandocity',
        name: 'Orlando City',
        logo: 'https://fifauteam.com/images/teams/Orlando.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'portlandtimbers',
        name: 'Portland Timbers',
        logo: 'https://fifauteam.com/images/teams/Portland.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'sandiego',
        name: 'San Diego',
        logo: 'https://fifauteam.com/images/teams/SanDiego.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'sanjoseearthquakes',
        name: 'San Jose Earthquakes',
        logo: 'https://fifauteam.com/images/teams/Earthquakes.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'sportingkansascity',
        name: 'Sporting Kansas City',
        logo: 'https://fifauteam.com/images/teams/SportingKC.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'stlouiscityfc',
        name: 'St Louis City FC',
        logo: 'https://fifauteam.com/images/teams/StLouisCity.webp',
        stars: 3,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'assainttienne',
        name: 'AS Saint-Étienne',
        logo: 'https://fifauteam.com/images/teams/ASSE.webp',
        stars: 3,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'racingclubdelens',
        name: 'Racing Club de Lens',
        // logo: 'https://fifauteam.com/images/teams/Lens.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/France%20-%20Ligue%201/RC%20Lens.png?raw=true',
        stars: 3,
        type: 'club',
        division: 'Ligue 1',
        country: 'FR'
    },
    {
        id: 'aldovidi',
        name: 'Aldovidi',
        logo: 'https://fifauteam.com/images/teams/Aldosivi.webp',
        stars: 2.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'tigre',
        name: 'Tigre',
        logo: 'https://fifauteam.com/images/teams/Tigre.webp',
        stars: 2.5,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'lask',
        name: 'LASK',
        // logo: 'https://fifauteam.com/images/teams/LASK.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Austria%20-%20Bundesliga/LASK.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'wolfsbergerac',
        name: 'Wolfsberger AC',
        // logo: 'https://fifauteam.com/images/teams/Wolfsberger.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Austria%20-%20Bundesliga/Wolfsberger%20AC.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'shanghaigreenlandshenhua',
        name: 'Shanghai Greenland Shenhua',
        logo: 'https://fifauteam.com/images/teams/ShangaiShenhua.webp',
        stars: 2.5,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'shanghaiport',
        name: 'Shanghai Port',
        logo: 'https://fifauteam.com/images/teams/ShangaiSIPG.webp',
        stars: 2.5,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'brndbyif',
        name: 'Brøndby IF',
        // logo: 'https://fifauteam.com/images/teams/Brondby.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Denmark%20-%20Superliga/Br%C3%B6ndby%20IF.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'randersfc',
        name: 'Randers FC',
        // logo: 'https://fifauteam.com/images/teams/Randers.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Denmark%20-%20Superliga/Randers%20FC.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'charltonathletic',
        name: 'Charlton Athletic',
        logo: 'https://fifauteam.com/images/teams/Charlton.webp',
        stars: 2.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'portsmouth',
        name: 'Portsmouth',
        logo: 'https://fifauteam.com/images/teams/Portsmouth.webp',
        stars: 2.5,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'cardiffcity',
        name: 'Cardiff City',
        logo: 'https://fifauteam.com/images/teams/CardiffCity.webp',
        stars: 2.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: '1fcmagdeburg',
        name: '1. FC Magdeburg',
        logo: 'https://fifauteam.com/images/teams/Magdeburg.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: '1fcnrnberg',
        name: '1. FC Nürnberg',
        logo: 'https://fifauteam.com/images/teams/Nurnberg.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'fcschalke04',
        name: 'FC Schalke 04',
        logo: 'https://fifauteam.com/images/teams/Schalke04.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'greutherfrth',
        name: 'Greuther Fürth',
        logo: 'https://fifauteam.com/images/teams/Furth.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'karlsruhersc',
        name: 'Karlsruher SC',
        logo: 'https://fifauteam.com/images/teams/Karlsruher.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'scpaderborn',
        name: 'SC Paderborn',
        logo: 'https://fifauteam.com/images/teams/Paderborn.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'svelversberg',
        name: 'SV Elversberg',
        logo: 'https://fifauteam.com/images/teams/Elversberg.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'daejeoncitizen',
        name: 'Daejeon Citizen',
        logo: 'https://fifauteam.com/images/teams/Daejeon.webp',
        stars: 2.5,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'fcseoul',
        name: 'FC Seoul',
        logo: 'https://fifauteam.com/images/teams/Seoul.webp',
        stars: 2.5,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'jeonbukhyundaimotors',
        name: 'Jeonbuk Hyundai Motors',
        logo: 'https://fifauteam.com/images/teams/Jeonbuk.webp',
        stars: 2.5,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'pohangsteelers',
        name: 'Pohang Steelers',
        logo: 'https://fifauteam.com/images/teams/Pohang.webp',
        stars: 2.5,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'fortunasittard',
        name: 'Fortuna Sittard',
        // logo: 'https://fifauteam.com/images/teams/FortunaSittard.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/Fortuna%20Sittard.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'rosenborg',
        name: 'Rosenborg',
        // logo: 'https://fifauteam.com/images/teams/Rosenborg.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Norway%20-%20Eliteserien/Rosenborg%20BK.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'skbrann',
        name: 'SK Brann',
        // logo: 'https://fifauteam.com/images/teams/Brann.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Norway%20-%20Eliteserien/SK%20Brann.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'viking',
        name: 'Viking',
        // logo: 'https://fifauteam.com/images/teams/Viking.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Norway%20-%20Eliteserien/Viking%20FK.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'jagielloniabiaystok',
        name: 'Jagiellonia Białystok',
        // logo: 'https://fifauteam.com/images/teams/Jagiellonia.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Poland%20-%20PKO%20BP%20Ekstraklasa/Jagiellonia%20Bialystok.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'pogoszczecin',
        name: 'Pogoń Szczecin',
        // logo: 'https://fifauteam.com/images/teams/Szczecin.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Poland%20-%20PKO%20BP%20Ekstraklasa/Pogon%20Szczecin.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'avs',
        name: 'AVS',
        // logo: 'https://fifauteam.com/images/teams/Aves.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/Avs%20Futebol.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'cdnacional',
        name: 'CD Nacional',
        // logo: 'https://fifauteam.com/images/teams/NacionalMadeira.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/CD%20Nacional.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'estrelaamadora',
        name: 'Estrela Amadora',
        // logo: 'https://fifauteam.com/images/teams/EstrelaAmadora.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/CF%20Estrela%20Amadora.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'moreirense',
        name: 'Moreirense',
        // logo: 'https://fifauteam.com/images/teams/Moreirense.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/Moreirense%20FC.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'cfrcluj',
        name: 'CFR Cluj',
        // logo: 'https://fifauteam.com/images/teams/Cluj.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Romania%20-%20SuperLiga/CFR%20Cluj.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Superliga',
        country: 'RO'
    },
    {
        id: 'universitateacraiova',
        name: 'Universitatea Craiova',
        // logo: 'https://fifauteam.com/images/teams/Craiova.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Romania%20-%20SuperLiga/CS%20Universitatea%20Craiova.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Superliga',
        country: 'RO'
    },
    {
        id: 'heartofmidlothian',
        name: 'Heart of Midlothian',
        // logo: 'https://fifauteam.com/images/teams/Hearts.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Scotland%20-%20Scottish%20Premiership/Heart%20of%20Midlothian%20FC.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'hibernian',
        name: 'Hibernian',
        // logo: 'https://fifauteam.com/images/teams/Hibernian.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Scotland%20-%20Scottish%20Premiership/Hibernian%20FC.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'albacete',
        name: 'Albacete',
        logo: 'https://fifauteam.com/images/teams/Albacete.webp',
        stars: 2.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'burgos',
        name: 'Burgos',
        logo: 'https://fifauteam.com/images/teams/Burgos.webp',
        stars: 2.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'granada',
        name: 'Granada',
        logo: 'https://fifauteam.com/images/teams/Granada.webp',
        stars: 2.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'huesca',
        name: 'Huesca',
        logo: 'https://fifauteam.com/images/teams/Huesca.webp',
        stars: 2.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'aik',
        name: 'AIK',
        // logo: 'https://fifauteam.com/images/teams/AIK.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Sweden%20-%20Allsvenskan/AIK.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'bkhcken',
        name: 'BK Häcken',
        // logo: 'https://fifauteam.com/images/teams/Hacken.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Sweden%20-%20Allsvenskan/BK%20H%C3%A4cken.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'djurgrdensif',
        name: 'Djurgårdens IF',
        // logo: 'https://fifauteam.com/images/teams/Djurgardens.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Sweden%20-%20Allsvenskan/Djurg%C3%A5rdens%20IF.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'hammarbyif',
        name: 'Hammarby IF',
        // logo: 'https://fifauteam.com/images/teams/Hammarby.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Sweden%20-%20Allsvenskan/Hammarby%20IF.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'ifelfsborg',
        name: 'IF Elfsborg',
        // logo: 'https://fifauteam.com/images/teams/Elfsborg.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Sweden%20-%20Allsvenskan/IF%20Elfsborg.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'antalyaspor',
        name: 'Antalyaspor',
        // logo: 'https://fifauteam.com/images/teams/Antalyaspor.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Antalyaspor.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'kasmpaaistanbul',
        name: 'Kasımpaşa Istanbul',
        // logo: 'https://fifauteam.com/images/teams/Kasimpasa.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Kasimpasa.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'kocaelispor',
        name: 'Kocaelispor',
        // logo: 'https://fifauteam.com/images/teams/Kocaelispor.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/T%C3%BCrkiye%20-%20S%C3%BCper%20Lig/Kocaelispor.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'fcdallas',
        name: 'FC Dallas',
        logo: 'https://fifauteam.com/images/teams/Dallas.webp',
        stars: 2.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'houstondynamo',
        name: 'Houston Dynamo',
        logo: 'https://fifauteam.com/images/teams/HoustonDynamo.webp',
        stars: 2.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'newyorkcityfc',
        name: 'New York City FC',
        logo: 'https://fifauteam.com/images/teams/NewYorkCity.webp',
        stars: 2.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'philadelphiaunion',
        name: 'Philadelphia Union',
        logo: 'https://fifauteam.com/images/teams/Philadelphia.webp',
        stars: 2.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'realsaltlake',
        name: 'Real Salt Lake',
        logo: 'https://fifauteam.com/images/teams/RealSaltLake.webp',
        stars: 2.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'cerclebrugge',
        name: 'Cercle Brugge',
        // logo: 'https://fifauteam.com/images/teams/CercleBrugge.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/Cercle%20Brugge.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'dendereh',
        name: 'Dender EH',
        // logo: 'https://fifauteam.com/images/teams/Dender.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/FCV%20Dender%20EH.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'sinttruiden',
        name: 'Sint-Truiden',
        // logo: 'https://fifauteam.com/images/teams/Truiden.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Belgium%20-%20Jupiler%20Pro%20League/Sint-Truidense%20VV.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'beijingsinoboguoan',
        name: 'Beijing Sinobo Guoan',
        logo: 'https://fifauteam.com/images/teams/BeijingGuoan.webp',
        stars: 2.5,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'fcnordsjlland',
        name: 'FC Nordsjælland',
        // logo: 'https://fifauteam.com/images/teams/Nordsjaelland.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Denmark%20-%20Superliga/FC%20Nordsjaelland.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'silkeborgif',
        name: 'Silkeborg IF',
        // logo: 'https://fifauteam.com/images/teams/Silkeborg.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Denmark%20-%20Superliga/Silkeborg%20IF.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'huddersfieldtown',
        name: 'Huddersfield Town',
        logo: 'https://fifauteam.com/images/teams/Huddersfield.webp',
        stars: 2.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'enavantguingamp',
        name: 'En Avant Guingamp',
        logo: 'https://fifauteam.com/images/teams/Guingamp.webp',
        stars: 2.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'lavalmfc',
        name: 'Laval MFC',
        logo: 'https://fifauteam.com/images/teams/Laval.webp',
        stars: 2.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'dynamodresden',
        name: 'Dynamo Dresden',
        logo: 'https://fifauteam.com/images/teams/Dresden.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'eintrachtbraunschweig',
        name: 'Eintracht Braunschweig',
        logo: 'https://fifauteam.com/images/teams/Braunschweig.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'preuenmnster',
        name: 'Preußen Münster',
        logo: 'https://fifauteam.com/images/teams/Preussen Munster.webp',
        stars: 2.5,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: 'bari',
        name: 'Bari',
        logo: 'https://fifauteam.com/images/teams/Bari.webp',
        stars: 2.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'carraresecalcio',
        name: 'Carrarese Calcio',
        logo: 'https://fifauteam.com/images/teams/Carrarese.webp',
        stars: 2.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'catanzaro',
        name: 'Catanzaro',
        logo: 'https://fifauteam.com/images/teams/Catanzaro.webp',
        stars: 2.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'empoli',
        name: 'Empoli',
        logo: 'https://fifauteam.com/images/teams/Empoli.webp',
        stars: 2.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'mantova',
        name: 'Mantova',
        logo: 'https://fifauteam.com/images/teams/Mantova.webp',
        stars: 2.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'padova',
        name: 'Padova',
        logo: 'https://fifauteam.com/images/teams/Padova.webp',
        stars: 2.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'sdtirol',
        name: 'Südtirol',
        logo: 'https://fifauteam.com/images/teams/Sudtirol.webp',
        stars: 2.5,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'scheerenveen',
        name: 'SC Heerenveen',
        // logo: 'https://fifauteam.com/images/teams/Heerenveen.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/SC%20Heerenveen.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'spartarotterdam',
        name: 'Sparta Rotterdam',
        // logo: 'https://fifauteam.com/images/teams/SpartaRotterdam.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Netherlands%20-%20Eredivisie/Sparta%20Rotterdam.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'cracovia',
        name: 'Cracovia',
        // logo: 'https://fifauteam.com/images/teams/Cracovia.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Poland%20-%20PKO%20BP%20Ekstraklasa/Cracovia.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'grnikzabrze',
        name: 'Górnik Zabrze',
        // logo: 'https://fifauteam.com/images/teams/Zabrze.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Poland%20-%20PKO%20BP%20Ekstraklasa/G%C3%B3rnik%20Zabrze.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'widzewd',
        name: 'Widzew Łódź',
        // logo: 'https://fifauteam.com/images/teams/WidzewLodz.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Poland%20-%20PKO%20BP%20Ekstraklasa/Widzew%20Lodz.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'tondela',
        name: 'Tondela',
        // logo: 'https://fifauteam.com/images/teams/Tondela.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Portugal%20-%20Liga%20Portugal/CD%20Tondela.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'dinamobucuresti',
        name: 'Dinamo Bucuresti',
        // logo: 'https://fifauteam.com/images/teams/DinamoBucuresti.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Romania%20-%20SuperLiga/FC%20Dinamo%201948.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Superliga',
        country: 'RO'
    },
    {
        id: 'rapidbucureti',
        name: 'Rapid București',
        // logo: 'https://fifauteam.com/images/teams/RapidBucaresti.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Romania%20-%20SuperLiga/FC%20Rapid%201923.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Superliga',
        country: 'RO'
    },
    {
        id: 'universitateacluj',
        name: 'Universitatea Cluj',
        // logo: 'https://fifauteam.com/images/teams/UniversitateaCluj.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Romania%20-%20SuperLiga/FC%20Universitatea%20Cluj.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Superliga',
        country: 'RO'
    },
    {
        id: 'aberdeen',
        name: 'Aberdeen',
        // logo: 'https://fifauteam.com/images/teams/Aberdeen.webp',
        logo: 'https://github.com/luukhopman/football-logos/blob/master/logos/Scotland%20-%20Scottish%20Premiership/Aberdeen%20FC.png?raw=true',
        stars: 2.5,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'castelln',
        name: 'Castellón',
        logo: 'https://fifauteam.com/images/teams/Castellon.webp',
        stars: 2.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'mlaga',
        name: 'Málaga',
        logo: 'https://fifauteam.com/images/teams/Malaga.webp',
        stars: 2.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'mjllbyai',
        name: 'Mjällby AI',
        logo: 'https://fifauteam.com/images/teams/Mjallby.webp',
        stars: 2.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'fclausannesport',
        name: 'FC Lausanne-Sport',
        logo: 'https://fifauteam.com/images/teams/LausanneSport.webp',
        stars: 2.5,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'fcluzern',
        name: 'FC Luzern',
        logo: 'https://fifauteam.com/images/teams/Luzern.webp',
        stars: 2.5,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'fcsion',
        name: 'FC Sion',
        logo: 'https://fifauteam.com/images/teams/Sion.webp',
        stars: 2.5,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'genlerbirlii',
        name: 'Gençlerbirliği',
        logo: 'https://fifauteam.com/images/teams/Genclerbirligi.webp',
        stars: 2.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'gztepe',
        name: 'Göztepe',
        logo: 'https://fifauteam.com/images/teams/Goztepe.webp',
        stars: 2.5,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'coloradorapids',
        name: 'Colorado Rapids',
        logo: 'https://fifauteam.com/images/teams/ColoradoRapids.webp',
        stars: 2.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'dcunited',
        name: 'D.C. United',
        logo: 'https://fifauteam.com/images/teams/DCUnited.webp',
        stars: 2.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'torontofc',
        name: 'Toronto FC',
        logo: 'https://fifauteam.com/images/teams/Toronto.webp',
        stars: 2.5,
        type: 'club',
        division: 'Major League Soccer',
        country: 'US'
    },
    {
        id: 'sanmartn',
        name: 'San Martín',
        logo: 'https://fifauteam.com/images/teams/SanMartin.webp',
        stars: 2,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'lalouvire',
        name: 'La Louvière',
        logo: 'https://fifauteam.com/images/teams/LaLouviere.webp',
        stars: 2,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'zultewaregem',
        name: 'Zulte Waregem',
        logo: 'https://fifauteam.com/images/teams/Zulte.webp',
        stars: 2,
        type: 'club',
        division: '1a Pro League',
        country: 'BE'
    },
    {
        id: 'chengdurongcheng',
        name: 'Chengdu Rongcheng',
        logo: 'https://fifauteam.com/images/teams/Rongcheng.webp',
        stars: 2,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'shandonglunengtaishan',
        name: 'Shandong Luneng Taishan',
        logo: 'https://fifauteam.com/images/teams/Shandong.webp',
        stars: 2,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'obodense',
        name: 'OB Odense',
        logo: 'https://fifauteam.com/images/teams/Odense.webp',
        stars: 2,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'viborgff',
        name: 'Viborg FF',
        logo: 'https://fifauteam.com/images/teams/Viborg.webp',
        stars: 2,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'sheffieldwednesday',
        name: 'Sheffield Wednesday',
        logo: 'https://fifauteam.com/images/teams/SheffieldWednesday.webp',
        stars: 2,
        type: 'club',
        division: 'Efl Championship',
        country: 'EN'
    },
    {
        id: 'blackpool',
        name: 'Blackpool',
        logo: 'https://fifauteam.com/images/teams/Blackpool.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'boltonwanderers',
        name: 'Bolton Wanderers',
        logo: 'https://fifauteam.com/images/teams/Bolton.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'plymouthargyle',
        name: 'Plymouth Argyle',
        logo: 'https://fifauteam.com/images/teams/Plymouth.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'wycombewanderers',
        name: 'Wycombe Wanderers',
        logo: 'https://fifauteam.com/images/teams/Wycombe.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'clermontfoot',
        name: 'Clermont Foot',
        logo: 'https://fifauteam.com/images/teams/Clermont.webp',
        stars: 2,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'grenoblefoot38',
        name: 'Grenoble Foot 38',
        logo: 'https://fifauteam.com/images/teams/Grenoble.webp',
        stars: 2,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'troyes',
        name: 'Troyes',
        logo: 'https://fifauteam.com/images/teams/Troyes.webp',
        stars: 2,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'arminiabielefeld',
        name: 'Arminia Bielefeld',
        logo: 'https://fifauteam.com/images/teams/Bielefeld.webp',
        stars: 2,
        type: 'club',
        division: '2. Bundesliga',
        country: 'DE'
    },
    {
        id: '1fcsaarbrcken',
        name: '1. FC Saarbrücken',
        logo: 'https://fifauteam.com/images/teams/Saarbrucken.webp',
        stars: 2,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'hansarostock',
        name: 'Hansa Rostock',
        logo: 'https://fifauteam.com/images/teams/HansaRostock.webp',
        stars: 2,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'tsv1860munchen',
        name: 'TSV 1860 Munchen',
        logo: 'https://fifauteam.com/images/teams/1860Munchen.webp',
        stars: 2,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'avelino',
        name: 'Avelino',
        logo: 'https://fifauteam.com/images/teams/Avelino.webp',
        stars: 2,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'cesena',
        name: 'Cesena',
        logo: 'https://fifauteam.com/images/teams/Cesena.webp',
        stars: 2,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'reggiana',
        name: 'Reggiana',
        logo: 'https://fifauteam.com/images/teams/Reggiana.webp',
        stars: 2,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'ssjuvestabia',
        name: 'SS Juve Stabia',
        logo: 'https://fifauteam.com/images/teams/JuveStabia.webp',
        stars: 2,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'virtusentella',
        name: 'Virtus Entella',
        logo: 'https://fifauteam.com/images/teams/Entella.webp',
        stars: 2,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'fcanyang',
        name: 'FC Anyang',
        logo: 'https://fifauteam.com/images/teams/Anyang.webp',
        stars: 2,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'groningen',
        name: 'Groningen',
        logo: 'https://fifauteam.com/images/teams/Groningen.webp',
        stars: 2,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'heraclesalmelo',
        name: 'Heracles Almelo',
        logo: 'https://fifauteam.com/images/teams/Heracles.webp',
        stars: 2,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'nacbreda',
        name: 'NAC Breda',
        logo: 'https://fifauteam.com/images/teams/Breda.webp',
        stars: 2,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'peczwolle',
        name: 'PEC Zwolle',
        logo: 'https://fifauteam.com/images/teams/Zwolle.webp',
        stars: 2,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'sarpsborg08',
        name: 'Sarpsborg 08',
        logo: 'https://fifauteam.com/images/teams/Sarpsborg.webp',
        stars: 2,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'motorlublin',
        name: 'Motor Lublin',
        logo: 'https://fifauteam.com/images/teams/MotorLubin.webp',
        stars: 2,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'piastgliwice',
        name: 'Piast Gliwice',
        logo: 'https://fifauteam.com/images/teams/Gliwice.webp',
        stars: 2,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'radomiakradom',
        name: 'Radomiak Radom',
        logo: 'https://fifauteam.com/images/teams/Radomiak.webp',
        stars: 2,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'alshabab',
        name: 'Al Shabab',
        logo: 'https://fifauteam.com/images/teams/AlShabab.webp',
        stars: 2,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'ifkgteborg',
        name: 'IFK Göteborg',
        logo: 'https://fifauteam.com/images/teams/IFKGoteborg.webp',
        stars: 2,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'fczrich',
        name: 'FC Zürich',
        logo: 'https://fifauteam.com/images/teams/Zurich.webp',
        stars: 2,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'deportivoriestra',
        name: 'Deportivo Riestra',
        logo: 'https://fifauteam.com/images/teams/DeportivoRiestra.webp',
        stars: 2,
        type: 'club',
        division: 'Liga Profesional De Fútbol',
        country: 'AR'
    },
    {
        id: 'blauweisslinz',
        name: 'Blau-Weiss Linz',
        logo: 'https://fifauteam.com/images/teams/Blau.webp',
        stars: 2,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'scraltach',
        name: 'SCR Altach',
        logo: 'https://fifauteam.com/images/teams/Altach.webp',
        stars: 2,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'barnsley',
        name: 'Barnsley',
        logo: 'https://fifauteam.com/images/teams/Barnsley.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'leytonorient',
        name: 'Leyton Orient',
        logo: 'https://fifauteam.com/images/teams/LeytonOrient.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'reading',
        name: 'Reading',
        logo: 'https://fifauteam.com/images/teams/Reading.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'rotherhamunited',
        name: 'Rotherham United',
        logo: 'https://fifauteam.com/images/teams/Rotherham.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'stockportcounty',
        name: 'Stockport County',
        logo: 'https://fifauteam.com/images/teams/Stockport.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'wiganathletic',
        name: 'Wigan Athletic',
        logo: 'https://fifauteam.com/images/teams/Wigan.webp',
        stars: 2,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'beauleroixfc',
        name: 'Beauleroix FC',
        logo: 'https://fifauteam.com/images/teams/Beauleroix.webp',
        stars: 2,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'fcannecy',
        name: 'FC Annecy',
        logo: 'https://fifauteam.com/images/teams/ Annecy.webp',
        stars: 2,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'paufc',
        name: 'Pau FC',
        logo: 'https://fifauteam.com/images/teams/Pau.webp',
        stars: 2,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'redstarfc',
        name: 'Red Star FC',
        logo: 'https://fifauteam.com/images/teams/RedStar.webp',
        stars: 2,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'usldunkerque',
        name: 'USL Dunkerque',
        logo: 'https://fifauteam.com/images/teams/Dunkerque.webp',
        stars: 2,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'rotweissessen',
        name: 'Rot-Weiss Essen',
        logo: 'https://fifauteam.com/images/teams/Essen.webp',
        stars: 2,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'vflosnabrck',
        name: 'VfL Osnabrück',
        logo: 'https://fifauteam.com/images/teams/Osnabruck .webp',
        stars: 2,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'wehenwiesbaden',
        name: 'Wehen Wiesbaden',
        logo: 'https://fifauteam.com/images/teams/Wiesbaden.webp',
        stars: 2,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'frosione',
        name: 'Frosione',
        logo: 'https://fifauteam.com/images/teams/Frosione.webp',
        stars: 2,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'pescara',
        name: 'Pescara',
        logo: 'https://fifauteam.com/images/teams/Pescara.webp',
        stars: 2,
        type: 'club',
        division: 'Serie Bkt',
        country: 'IT'
    },
    {
        id: 'daegufc',
        name: 'Daegu FC',
        logo: 'https://fifauteam.com/images/teams/Daegu.webp',
        stars: 2,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'gangwonfc',
        name: 'Gangwon FC',
        logo: 'https://fifauteam.com/images/teams/Gangwon.webp',
        stars: 2,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'gimcheonsangmu',
        name: 'Gimcheon Sangmu',
        logo: 'https://fifauteam.com/images/teams/Sangmu.webp',
        stars: 2,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'jejuunited',
        name: 'Jeju United',
        logo: 'https://fifauteam.com/images/teams/Jeju.webp',
        stars: 2,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'suwonfc',
        name: 'Suwon FC',
        logo: 'https://fifauteam.com/images/teams/Suwon.webp',
        stars: 2,
        type: 'club',
        division: 'K-league 1',
        country: 'KR'
    },
    {
        id: 'excelsior',
        name: 'Excelsior',
        logo: 'https://fifauteam.com/images/teams/Excelsior.webp',
        stars: 2,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'fcvolendam',
        name: 'FC Volendam',
        logo: 'https://fifauteam.com/images/teams/Volendam.webp',
        stars: 2,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'fredrikstad',
        name: 'Fredrikstad',
        logo: 'https://fifauteam.com/images/teams/Fredrikstad.webp',
        stars: 2,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'strmsgodset',
        name: 'Strømsgodset',
        logo: 'https://fifauteam.com/images/teams/Stromsgodset.webp',
        stars: 2,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'troms',
        name: 'Tromsø',
        logo: 'https://fifauteam.com/images/teams/Tromso.webp',
        stars: 2,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'vlerenga',
        name: 'Vålerenga',
        logo: 'https://fifauteam.com/images/teams/Valerenga.webp',
        stars: 2,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'gkskatowic',
        name: 'GKS Katowic',
        logo: 'https://fifauteam.com/images/teams/Katowice.webp',
        stars: 2,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'koronakielce',
        name: 'Korona Kielce',
        logo: 'https://fifauteam.com/images/teams/Kielce.webp',
        stars: 2,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'lechiagdask',
        name: 'Lechia Gdańsk',
        logo: 'https://fifauteam.com/images/teams/Gdansk.webp',
        stars: 2,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'zagbielubin',
        name: 'Zagłębie Lubin',
        logo: 'https://fifauteam.com/images/teams/Lubin.webp',
        stars: 2,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'alverca',
        name: 'Alverca',
        logo: 'https://fifauteam.com/images/teams/Alverca.webp',
        stars: 2,
        type: 'club',
        division: 'Liga Portugal',
        country: 'PT'
    },
    {
        id: 'botoani',
        name: 'Botoșani',
        logo: 'https://fifauteam.com/images/teams/Botosani.webp',
        stars: 2,
        type: 'club',
        division: 'Superliga',
        country: 'DK'
    },
    {
        id: 'farulconstana',
        name: 'Farul Constanța',
        logo: 'https://fifauteam.com/images/teams/Farul.webp',
        stars: 2,
        type: 'club',
        division: 'Superliga',
        country: 'DK'
    },
    {
        id: 'fchermannstadt',
        name: 'FC Hermannstadt',
        logo: 'https://fifauteam.com/images/teams/Hermannstadt.webp',
        stars: 2,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'fcpetrolul',
        name: 'FC Petrolul',
        logo: 'https://fifauteam.com/images/teams/Petrolul.webp',
        stars: 2,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'utaarad',
        name: 'UTA Arad',
        logo: 'https://fifauteam.com/images/teams/Utad.webp',
        stars: 2,
        type: 'club',
        division: 'Superliga',
        country: 'DK'
    },
    {
        id: 'alkhaleej',
        name: 'Al Khaleej',
        logo: 'https://fifauteam.com/images/teams/Default.webp',
        stars: 2,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'motherwell',
        name: 'Motherwell',
        logo: 'https://fifauteam.com/images/teams/Motherwell.webp',
        stars: 2,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'andorra',
        name: 'Andorra',
        logo: 'https://fifauteam.com/images/teams/Andorra.webp',
        stars: 2,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'ceuta',
        name: 'Ceuta',
        logo: 'https://fifauteam.com/images/teams/Ceuta.webp',
        stars: 2,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'culturalleonesa',
        name: 'Cultural Leonesa',
        logo: 'https://fifauteam.com/images/teams/Leonesa.webp',
        stars: 2,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'gais',
        name: 'GAIS',
        logo: 'https://fifauteam.com/images/teams/GAIS.webp',
        stars: 2,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'ifbrommapojkarna',
        name: 'IF Brommapojkarna',
        logo: 'https://fifauteam.com/images/teams/Brommapojkarna.webp',
        stars: 2,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'ifknorrkping',
        name: 'IFK Norrköping',
        logo: 'https://fifauteam.com/images/teams/IFKNorrkoping.webp',
        stars: 2,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'iksirius',
        name: 'IK Sirius',
        logo: 'https://fifauteam.com/images/teams/Sirius.webp',
        stars: 2,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'fatihkaragmrk',
        name: 'Fatih Karagümrük',
        logo: 'https://fifauteam.com/images/teams/Karagumruk.webp',
        stars: 2,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'kayserispor',
        name: 'Kayserispor',
        logo: 'https://fifauteam.com/images/teams/Kayserispor.webp',
        stars: 2,
        type: 'club',
        division: 'Süper Lig',
        country: 'TR'
    },
    {
        id: 'cfmontral',
        name: 'CF Montréal',
        logo: 'https://fifauteam.com/images/teams/CFMontreal.webp',
        stars: 2,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'aucklandfc',
        name: 'Auckland FC',
        logo: 'https://fifauteam.com/images/teams/Auckland.webp',
        stars: 1.5,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'wswanderers',
        name: 'WS Wanderers',
        logo: 'https://fifauteam.com/images/teams/Wanderers.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'grazerak',
        name: 'Grazer AK',
        logo: 'https://fifauteam.com/images/teams/Grazer.webp',
        stars: 1.5,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'svried',
        name: 'SV Ried',
        logo: 'https://fifauteam.com/images/teams/Ried.webp',
        stars: 1.5,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'tsvhartberg',
        name: 'TSV Hartberg',
        logo: 'https://fifauteam.com/images/teams/Hartberg.webp',
        stars: 1.5,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'wsgtirol',
        name: 'WSG Tirol',
        logo: 'https://fifauteam.com/images/teams/Tirol.webp',
        stars: 1.5,
        type: 'club',
        division: 'Admiral Bundesliga',
        country: 'AT'
    },
    {
        id: 'wuhan3towns',
        name: 'Wuhan 3 Towns',
        logo: 'https://fifauteam.com/images/teams/WuhanThreeTowns.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'zhejiangpro',
        name: 'Zhejiang Pro',
        logo: 'https://fifauteam.com/images/teams/Zhejiang.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'snderjyskefodbold',
        name: 'SønderjyskE Fodbold',
        logo: 'https://fifauteam.com/images/teams/Soenderjyske.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'vejleboldklub',
        name: 'Vejle Boldklub',
        logo: 'https://fifauteam.com/images/teams/Vejle.webp',
        stars: 1.5,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'lincolncity',
        name: 'Lincoln City',
        logo: 'https://fifauteam.com/images/teams/LincolnCity.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'mansfieldtown',
        name: 'Mansfield Town',
        logo: 'https://fifauteam.com/images/teams/Mansfieldn.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'portvale',
        name: 'Port Vale',
        logo: 'https://fifauteam.com/images/teams/PortVale.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'stevenage',
        name: 'Stevenage',
        logo: 'https://fifauteam.com/images/teams/Stevenage.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'miltonkeynesdons',
        name: 'Milton Keynes Dons',
        logo: 'https://fifauteam.com/images/teams/MKDons.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'amienssc',
        name: 'Amiens SC',
        logo: 'https://fifauteam.com/images/teams/Amiens.webp',
        stars: 1.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'lemans',
        name: 'Le Mans',
        logo: 'https://fifauteam.com/images/teams/LeMans.webp',
        stars: 1.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'rodezaveryron',
        name: 'Rodez Averyron',
        logo: 'https://fifauteam.com/images/teams/Rodez.webp',
        stars: 1.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'scbastia',
        name: 'SC Bastia',
        logo: 'https://fifauteam.com/images/teams/Bastia.webp',
        stars: 1.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: 'alemanniaaachen',
        name: 'Alemannia Aachen',
        logo: 'https://fifauteam.com/images/teams/Alemannia.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'energiecottbus',
        name: 'Energie Cottbus',
        logo: 'https://fifauteam.com/images/teams/Energie.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'erzgebirgeaue',
        name: 'Erzgebirge Aue',
        logo: 'https://fifauteam.com/images/teams/Aue.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'fcingolstadt04',
        name: 'FC Ingolstadt 04',
        logo: 'https://fifauteam.com/images/teams/Ingolstadt.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'jahnregensburg',
        name: 'Jahn Regensburg',
        logo: 'https://fifauteam.com/images/teams/Regensburg.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'ssvulm',
        name: 'SSV Ulm',
        logo: 'https://fifauteam.com/images/teams/Ulm.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'svwaldhofmannheim',
        name: 'SV Waldhof Mannheim',
        logo: 'https://fifauteam.com/images/teams/Waldhof.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'atkmohunbagan',
        name: 'ATK Mohun Bagan',
        logo: 'https://fifauteam.com/images/teams/Bagan.webp',
        stars: 1.5,
        type: 'club',
        division: 'Hero Isl',
        country: 'IN'
    },
    {
        id: 'gwangju',
        name: 'Gwangju',
        logo: 'https://fifauteam.com/images/teams/Gwangju.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'haugesund',
        name: 'Haugesund',
        logo: 'https://fifauteam.com/images/teams/Haugesund.webp',
        stars: 1.5,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'kfumoslo',
        name: 'KFUM Oslo',
        logo: 'https://fifauteam.com/images/teams/KFUM.webp',
        stars: 1.5,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'sandefjord',
        name: 'Sandefjord',
        logo: 'https://fifauteam.com/images/teams/Sandefjord.webp',
        stars: 1.5,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'brukbettermalica',
        name: 'Bruk-Bet Termalica',
        logo: 'https://fifauteam.com/images/teams/Termalica.webp',
        stars: 1.5,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'otelulgalati',
        name: 'Otelul Galati',
        logo: 'https://fifauteam.com/images/teams/Galati.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'alokhdood',
        name: 'Al Okhdood',
        logo: 'https://fifauteam.com/images/teams/AlOkhdood.webp',
        stars: 1.5,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'alriyadh',
        name: 'Al Riyadh',
        logo: 'https://fifauteam.com/images/teams/AlRiyadh.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'dundeeunited',
        name: 'Dundee United',
        logo: 'https://fifauteam.com/images/teams/Dundeeunited.webp',
        stars: 1.5,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'kilmarnock',
        name: 'Kilmarnock',
        logo: 'https://fifauteam.com/images/teams/Kilmarnock.webp',
        stars: 1.5,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'livingston',
        name: 'Livingston',
        logo: 'https://fifauteam.com/images/teams/Livingston.webp',
        stars: 1.5,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'fcwinterthur',
        name: 'FC Winterthur',
        logo: 'https://fifauteam.com/images/teams/Winterthur.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'grasshopper',
        name: 'Grasshopper',
        logo: 'https://fifauteam.com/images/teams/Grasshopper.webp',
        stars: 1.5,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'thun',
        name: 'Thun',
        logo: 'https://fifauteam.com/images/teams/Thun.webp',
        stars: 1.5,
        type: 'club',
        division: 'Credit Suisse Super League',
        country: 'CH'
    },
    {
        id: 'melbournecity',
        name: 'Melbourne City',
        logo: 'https://fifauteam.com/images/teams/MelbourneCity.webp',
        stars: 1.5,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'melbournevictory',
        name: 'Melbourne Victory',
        logo: 'https://fifauteam.com/images/teams/MelbourneVictory.webp',
        stars: 1.5,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'perthglory',
        name: 'Perth Glory',
        logo: 'https://fifauteam.com/images/teams/PerthGlory.webp',
        stars: 1.5,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'dalianyingbo',
        name: 'Dalian Yingbo',
        logo: 'https://fifauteam.com/images/teams/Dalian.webp',
        stars: 1.5,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'tianjinteda',
        name: 'Tianjin TEDA',
        logo: 'https://fifauteam.com/images/teams/TianjinTEDA.webp',
        stars: 1.5,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'yunnanyukun',
        name: 'Yunnan Yukun',
        logo: 'https://fifauteam.com/images/teams/Yukun.webp',
        stars: 1.5,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'bradfordcity',
        name: 'Bradford City',
        logo: 'https://fifauteam.com/images/teams/Bradford.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'burtonalbion',
        name: 'Burton Albion',
        logo: 'https://fifauteam.com/images/teams/Burton.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'doncaster',
        name: 'Doncaster',
        logo: 'https://fifauteam.com/images/teams/Doncaster.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'exetercity',
        name: 'Exeter City',
        logo: 'https://fifauteam.com/images/teams/Exeter.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'northamptontown',
        name: 'Northampton Town',
        logo: 'https://fifauteam.com/images/teams/Northampton.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'peterborough',
        name: 'Peterborough',
        logo: 'https://fifauteam.com/images/teams/Peterborough.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'bristolrovers',
        name: 'Bristol Rovers',
        logo: 'https://fifauteam.com/images/teams/BristolRovers.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'cambridgeunited',
        name: 'Cambridge United',
        logo: 'https://fifauteam.com/images/teams/Cambridge.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'nottscounty',
        name: 'Notts County',
        logo: 'https://fifauteam.com/images/teams/NottsCounty.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'shrewsburytown',
        name: 'Shrewsbury Town',
        logo: 'https://fifauteam.com/images/teams/Shrewsbury.webp',
        stars: 1.5,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'nancy',
        name: 'Nancy',
        logo: 'https://fifauteam.com/images/teams/Nancy.webp',
        stars: 1.5,
        type: 'club',
        division: 'Ligue 2',
        country: 'FR'
    },
    {
        id: '1fcschweinfurt',
        name: '1. FC Schweinfurt',
        logo: 'https://fifauteam.com/images/teams/Schweinfurt.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'fcviktoriakoln',
        name: 'FC Viktoria Koln',
        logo: 'https://fifauteam.com/images/teams/Viktoria.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'msvduisburg',
        name: 'MSV Duisburg',
        logo: 'https://fifauteam.com/images/teams/Duisburg.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'scverl',
        name: 'SC Verl',
        logo: 'https://fifauteam.com/images/teams/Verl.webp',
        stars: 1.5,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'telstar',
        name: 'Telstar',
        logo: 'https://fifauteam.com/images/teams/Telstar.webp',
        stars: 1.5,
        type: 'club',
        division: 'Eredivisie',
        country: 'NL'
    },
    {
        id: 'bryne',
        name: 'Bryne',
        logo: 'https://fifauteam.com/images/teams/Bryne.webp',
        stars: 1.5,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'hamarkameratene',
        name: 'Hamarkameratene',
        logo: 'https://fifauteam.com/images/teams/Hamarkameratene.webp',
        stars: 1.5,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'kristiansund',
        name: 'Kristiansund',
        logo: 'https://fifauteam.com/images/teams/Kristiansund.webp',
        stars: 1.5,
        type: 'club',
        division: 'Eliteserien',
        country: 'NO'
    },
    {
        id: 'arkagdynia',
        name: 'Arka Gdynia',
        logo: 'https://fifauteam.com/images/teams/Gdynia.webp',
        stars: 1.5,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'wisapock',
        name: 'Wisła Płock',
        logo: 'https://fifauteam.com/images/teams/WislaPlock.webp',
        stars: 1.5,
        type: 'club',
        division: 'Pko Ekstraklasa',
        country: 'PL'
    },
    {
        id: 'argepiteti',
        name: 'Argeș Pitești',
        logo: 'https://fifauteam.com/images/teams/Arges.webp',
        stars: 1.5,
        type: 'club',
        division: 'Superliga',
        country: 'DK'
    },
    {
        id: 'unireaslobozia',
        name: 'Unirea Slobozia',
        logo: 'https://fifauteam.com/images/teams/UnireaSlobozia.webp',
        stars: 1.5,
        type: 'club',
        division: 'Superliga',
        country: 'DK'
    },
    {
        id: 'alfateh',
        name: 'Al-Fateh',
        logo: 'https://fifauteam.com/images/teams/AlFateh.webp',
        stars: 1.5,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'alfayha',
        name: 'Al Fayha',
        logo: 'https://fifauteam.com/images/teams/AlFayha.webp',
        stars: 1.5,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'stmirren',
        name: '>St Mirren',
        logo: 'https://fifauteam.com/images/teams/StMirren.webp',
        stars: 1.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'mirands',
        name: 'Mirandés',
        logo: 'https://fifauteam.com/images/teams/Mirandes.webp',
        stars: 1.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'realsociedadb',
        name: 'Real Sociedad B',
        logo: 'https://fifauteam.com/images/teams/RealSociedad.webp',
        stars: 1.5,
        type: 'club',
        division: 'Laliga Hypermotion',
        country: 'ES'
    },
    {
        id: 'degerforsif',
        name: 'Degerfors IF',
        logo: 'https://fifauteam.com/images/teams/Degerfors IF.webp',
        stars: 1.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'halmstadsbk',
        name: 'Halmstads BK',
        logo: 'https://fifauteam.com/images/teams/Halmstads.webp',
        stars: 1.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'ifkvrnamo',
        name: 'IFK Värnamo',
        logo: 'https://fifauteam.com/images/teams/Varnamo.webp',
        stars: 1.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'stersif',
        name: 'Östers IF',
        logo: 'https://fifauteam.com/images/teams/Osters.webp',
        stars: 1.5,
        type: 'club',
        division: 'Allsvenskan',
        country: 'SE'
    },
    {
        id: 'adelaideunited',
        name: 'Adelaide United',
        logo: 'https://fifauteam.com/images/teams/Adelaide.webp',
        stars: 1,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'newcastlejets',
        name: 'Newcastle Jets',
        logo: 'https://fifauteam.com/images/teams/NewcastleJets.webp',
        stars: 1,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'sydneyfc',
        name: 'Sydney FC',
        logo: 'https://fifauteam.com/images/teams/SydneyFC.webp',
        stars: 1,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'henanjianye',
        name: 'Henan Jianye',
        logo: 'https://fifauteam.com/images/teams/Henan.webp',
        stars: 1,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'quingdaohainiu',
        name: 'Quingdao Hainiu',
        logo: 'https://fifauteam.com/images/teams/Qingdao.webp',
        stars: 1,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'quingdaowestcoast',
        name: 'Quingdao West Coast',
        logo: 'https://fifauteam.com/images/teams/QingdaoWestCoast.webp',
        stars: 1,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'shenzhenpengcity',
        name: 'Shenzhen Peng City',
        logo: 'https://fifauteam.com/images/teams/ShenzhenPengCity.webp',
        stars: 1,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'fredericia',
        name: 'Fredericia',
        logo: 'https://fifauteam.com/images/teams/Fredericia.webp',
        stars: 1,
        type: 'club',
        division: '3f Superliga',
        country: 'DK'
    },
    {
        id: 'afcwimbledon',
        name: 'AFC Wimbledon',
        logo: 'https://fifauteam.com/images/teams/Wimbledon.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League One',
        country: 'EN'
    },
    {
        id: 'cheltenhamtown',
        name: 'Cheltenham Town',
        logo: 'https://fifauteam.com/images/teams/Cheltenham.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'chesterfield',
        name: 'Chesterfield',
        logo: 'https://fifauteam.com/images/teams/Chesterfield.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'colchesterunited',
        name: 'Colchester United',
        logo: 'https://fifauteam.com/images/teams/Colchester.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'fleetwoodtown',
        name: 'Fleetwood Town',
        logo: 'https://fifauteam.com/images/teams/FleetwoodTown.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'gillingham',
        name: 'Gillingham',
        logo: 'https://fifauteam.com/images/teams/Gillingham.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'grimsbytown',
        name: 'Grimsby Town',
        logo: 'https://fifauteam.com/images/teams/GrimsbyTown.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'walsall',
        name: 'Walsall',
        logo: 'https://fifauteam.com/images/teams/Walsall.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'tsvhavelse',
        name: 'TSV Havelse',
        logo: 'https://fifauteam.com/images/teams/Havelse.webp',
        stars: 1,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'odishafc',
        name: 'Odisha FC',
        logo: 'https://fifauteam.com/images/teams/Odisha.webp',
        stars: 1,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'shamrockrovers',
        name: 'Shamrock Rovers',
        logo: 'https://fifauteam.com/images/teams/ShamrockRovers.webp',
        stars: 1,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'stpatricksathletic',
        name: 'St Patrick’s Athletic',
        logo: 'https://fifauteam.com/images/teams/StPats.webp',
        stars: 1,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'metaloglobusbucureti',
        name: 'Metaloglobus București',
        logo: 'https://fifauteam.com/images/teams/Metaloglobus.webp',
        stars: 1,
        type: 'club',
        division: 'Superliga',
        country: 'DK'
    },
    {
        id: 'alnajma',
        name: 'Al Najma',
        logo: 'https://fifauteam.com/images/teams/AlNajma.webp',
        stars: 1,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'damac',
        name: 'Damac',
        logo: 'https://fifauteam.com/images/teams/Damac.webp',
        stars: 1,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'dundee',
        name: 'Dundee',
        logo: 'https://fifauteam.com/images/teams/Dundee.webp',
        stars: 1,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'macarthurfc',
        name: 'Macarthur FC',
        logo: 'https://fifauteam.com/images/teams/Macarthur.webp',
        stars: 1,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'changchunyatai',
        name: 'Changchun Yatai',
        logo: 'https://fifauteam.com/images/teams/Changchun.webp',
        stars: 1,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'meizhouhakka',
        name: 'Meizhou Hakka',
        logo: 'https://fifauteam.com/images/teams/Hakka.webp',
        stars: 1,
        type: 'club',
        division: 'Chinese Super League',
        country: 'CN'
    },
    {
        id: 'barnet',
        name: 'Barnet',
        logo: 'https://fifauteam.com/images/teams/Barnet.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'barrow',
        name: 'Barrow',
        logo: 'https://fifauteam.com/images/teams/Barrow.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'bromley',
        name: 'Bromley',
        logo: 'https://fifauteam.com/images/teams/Bromley.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'crawleytown',
        name: 'Crawley Town',
        logo: 'https://fifauteam.com/images/teams/CrawleyTown.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'crewealexandra',
        name: 'Crewe Alexandra',
        logo: 'https://fifauteam.com/images/teams/CreweAlexandra.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'harrogatetown',
        name: 'Harrogate Town',
        logo: 'https://fifauteam.com/images/teams/Harrogate.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'salfordcity',
        name: 'Salford City',
        logo: 'https://fifauteam.com/images/teams/Salford.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'swindontown',
        name: 'Swindon Town',
        logo: 'https://fifauteam.com/images/teams/Swindon.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'tranmererovers',
        name: 'Tranmere Rovers',
        logo: 'https://fifauteam.com/images/teams/TranmereRovers.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'vfbstuttgartii',
        name: 'VfB Stuttgart II',
        logo: 'https://fifauteam.com/images/teams/Stuttgart.webp',
        stars: 1,
        type: 'club',
        division: '3. Liga',
        country: 'DE'
    },
    {
        id: 'fcgoa',
        name: 'FC Goa',
        logo: 'https://fifauteam.com/images/teams/Goa.webp',
        stars: 1,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'derrycity',
        name: 'Derry City',
        logo: 'https://fifauteam.com/images/teams/DerryCity.webp',
        stars: 1,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'shelbourne',
        name: 'Shelbourne',
        logo: 'https://fifauteam.com/images/teams/Shelbourne.webp',
        stars: 1,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'cskszeredaciuc',
        name: 'Csíkszereda Ciuc',
        logo: 'https://fifauteam.com/images/teams/Csikszereda.webp',
        stars: 1,
        type: 'club',
        division: 'Superliga',
        country: 'DK'
    },
    {
        id: 'brisbaneroar',
        name: 'Brisbane Roar',
        logo: 'https://fifauteam.com/images/teams/Brisbane.webp',
        stars: 1,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'centralcoastmariners',
        name: 'Central Coast Mariners',
        logo: 'https://fifauteam.com/images/teams/CentralCoast.webp',
        stars: 1,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'wellingtonphoenix',
        name: 'Wellington Phoenix',
        logo: 'https://fifauteam.com/images/teams/Phoenix.webp',
        stars: 1,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'westernunited',
        name: 'Western United',
        logo: 'https://fifauteam.com/images/teams/WesternUnited.webp',
        stars: 1,
        type: 'club',
        division: 'Isuzu Ute A-league',
        country: 'AU'
    },
    {
        id: 'oldhamathletic',
        name: 'Oldham Athletic',
        logo: 'https://fifauteam.com/images/teams/Oldham.webp',
        stars: 1,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'tsghoffenheimii',
        name: 'TSG Hoffenheim II',
        logo: 'https://fifauteam.com/images/teams/Hoffenheim.webp',
        stars: 1,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'mumbaicityfc',
        name: 'Mumbai City FC',
        logo: 'https://fifauteam.com/images/teams/Mumbai.webp',
        stars: 1,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'bohemians',
        name: 'Bohemians',
        logo: 'https://fifauteam.com/images/teams/Bohemians.webp',
        stars: 1,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'alkholood',
        name: 'Al-Kholood',
        logo: 'https://fifauteam.com/images/teams/AlKholood.webp',
        stars: 1,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'falkirk',
        name: 'Falkirk',
        logo: 'https://fifauteam.com/images/teams/Falkirk.webp',
        stars: 1,
        type: 'club',
        division: 'Cinch Premiership',
        country: 'SCT'
    },
    {
        id: 'accringtonstanley',
        name: 'Accrington Stanley',
        logo: 'https://fifauteam.com/images/teams/Accrington.webp',
        stars: 0.5,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'newportcounty',
        name: 'Newport County',
        logo: 'https://fifauteam.com/images/teams/Newport.webp',
        stars: 0.5,
        type: 'club',
        division: 'Efl League Two',
        country: 'EN'
    },
    {
        id: 'bengalurufc',
        name: 'Bengaluru FC',
        logo: 'https://fifauteam.com/images/teams/Bengaluru.webp',
        stars: 0.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'northeastunited',
        name: 'Northeast United',
        logo: 'https://fifauteam.com/images/teams/NorthEastUnited.webp',
        stars: 0.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'unitedtigers',
        name: 'United Tigers',
        logo: 'https://fifauteam.com/images/teams/Default.webp',
        stars: 0.5,
        type: 'club',
        division: 'Hero Isl',
        country: 'IN'
    },
    {
        id: 'drogheda',
        name: 'Drogheda',
        logo: 'https://fifauteam.com/images/teams/Drogheda.webp',
        stars: 0.5,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'waterford',
        name: 'Waterford',
        logo: 'https://fifauteam.com/images/teams/Waterford.webp',
        stars: 0.5,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'chennaiyinfc',
        name: 'Chennaiyin FC',
        logo: 'https://fifauteam.com/images/teams/Chennaiyin.webp',
        stars: 0.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'eastbengal',
        name: 'East Bengal',
        logo: 'https://fifauteam.com/images/teams/EastBengal.webp',
        stars: 0.5,
        type: 'club',
        division: 'Hero Isl',
        country: 'IN'
    },
    {
        id: 'galwayunited',
        name: 'Galway United',
        logo: 'https://fifauteam.com/images/teams/Galway.webp',
        stars: 0.5,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'sligorovers',
        name: 'Sligo Rovers',
        logo: 'https://fifauteam.com/images/teams/SligoRovers.webp',
        stars: 0.5,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'alhazem',
        name: 'Al Hazem',
        logo: 'https://fifauteam.com/images/teams/AlHazem.webp',
        stars: 0.5,
        type: 'club',
        division: 'Mbs Pro League',
        country: 'SA'
    },
    {
        id: 'jamshedpurfc',
        name: 'Jamshedpur FC',
        logo: 'https://fifauteam.com/images/teams/Jamshedpur.webp',
        stars: 0.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'corkcity',
        name: 'Cork City',
        logo: 'https://fifauteam.com/images/teams/CorkCity.webp',
        stars: 0.5,
        type: 'club',
        division: 'Sse Airtricity Pd',
        country: 'IE'
    },
    {
        id: 'keralablasters',
        name: 'Kerala Blasters',
        logo: 'https://fifauteam.com/images/teams/Kerala.webp',
        stars: 0.5,
        type: 'club',
        division: 'Hero Isl',
        country: 'IN'
    },
    {
        id: 'hyderabadfc',
        name: 'Hyderabad FC',
        logo: 'https://fifauteam.com/images/teams/Hyderabad.webp',
        stars: 0.5,
        type: 'club',
        division: '',
        country: ''
    },
    {
        id: 'mohammedan',
        name: 'Mohammedan',
        logo: 'https://fifauteam.com/images/teams/Mohammedan.webp',
        stars: 0.5,
        type: 'club',
        division: 'Hero Isl',
        country: 'IN'
    },
    {
        id: 'punjabfc',
        name: 'Punjab FC',
        logo: 'https://fifauteam.com/images/teams/Roundglass.webp',
        stars: 0.5,
        type: 'club',
        division: '',
        country: ''
    },
];

export const PRESET_DEFINITIONS = {
  ALL: { label: 'All Teams', predicate: () => true },
  CLUBS: { label: 'Clubs Only', predicate: (t) => t.type === 'club' },
  COUNTRIES: { label: 'Countries Only', predicate: (t) => t.type === 'country' },
  EU_CLUBS: { label: 'European Clubs Only', predicate: (t) => t.type === 'club' && getCountryCodesByContinent('europe').includes(t.country) },
}