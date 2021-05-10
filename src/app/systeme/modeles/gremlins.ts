// Classe conceptuelle qui typera nos objets

export interface GremlinsI {
    _id?:number | string;
    nom:string;
    description?:string;
    img:string;
    status:string;
    taille?:string | number;
    specialites?:Array<string | number>;
    sexe?:string[];
}
