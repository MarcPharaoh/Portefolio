/**
 * @param {import("next").NextApiRequest} request 
 * @param {import("next").NextApiResponse} response 
 */
export default function contact(request, response) {
    if (request.method === 'POST') {
        // Validation des données
        if (validerDonnees(request.body)) {
            console.log(request.body);
            response.status(200).end();
        }

        else {
            response.status(400).end();
        }
    }
    else {
        response.setHeader('Allow', 'POST')
        response.status(405).end();
    }
    /**
     * Une fonction qui permet la validation des données
     * @param {*} donnees 
     * @returns si la donnée est valide
     */
    function validerDonnees(donnees) {
        const { nom, courriel, message } = donnees;
        
        // Valider le nom
        const longueurMinimaleNom = 2;
        const longueurMaximaleNom = 30;
        const estNomValide = (nom.trim().length >= longueurMinimaleNom) && (nom.trim().length <= longueurMaximaleNom);
    
        // Valider l'adresse e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const estCourrielValide = regexEmail.test(courriel.trim().toLowerCase());
      
        // Valider le message
        const longueurMinimaleMessage = 5;
        const longueurMaximaleMessage = 100;
        const estMessageValide = (message.trim().length >= longueurMinimaleMessage) && (message.trim().length <= longueurMaximaleMessage);
      
        return estNomValide && estCourrielValide && estMessageValide;
    }

}