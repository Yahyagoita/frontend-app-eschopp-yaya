import { Link } from "react-router-dom";

function BadgeProduit({produit, panier, setPanier}){
  const addToPanier = () => {

  const produitInpanier = panier.find((item)=> item.produit.id===produit.id)
  if(produitInpanier){
    const panierSansProduit = panier.filter((item)=> item.produit.id!==produit.id);
    const newPanier = [...panierSansProduit,
      {produit,qte: produitInpanier.qte+1}]
      setPanier(newPanier)
  }else{
    const newPanier= [...panier,{produit,qte: 1}]
    setPanier(newPanier)
  }
  }

    return(
        <div className="produit-badge">
            <div className="produit-image">
              <img
                src={require(`../img/products/${produit.photo}`)}
                alt="Appareil-photo-canon"
              />
            </div>
            <div className="produit-details">
              <h2>{produit.nom}</h2>
              <h3>{produit.prix}</h3>
            </div>
            <div className="produit-bouton">
              <button className="ajout-panier-btn"  onClick={addToPanier}>
                +Panier
              </button>
              <Link to={`/details/${produit.id}`}className="details-btn" >
                Détails
              </Link>
            </div>
          </div>

    )

}
export default BadgeProduit;