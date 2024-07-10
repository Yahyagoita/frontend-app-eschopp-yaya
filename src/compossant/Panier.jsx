import React from "react";
import btnPlus from "img/icons/add.png";
import btnMoins from "img/icons/minus.png";
import btnDelete from "img/icons/delete.png";
function Panier({panier, setPanier}){
    const plusQtePanier = (produit) => {
        const newPanier = panier.map((item) => {
            if(item.produit.id===produit.id)
                return {...item, qte: item.qte+1}
            return item
        })
        setPanier(newPanier)
    } 
    const moinQtePanier = (produit) => {
        const newPanier = panier.map((item) => {
            if(item.produit.id===produit.id)
                if(item.qte> 0 ){
                    return {...item, qte: item.qte - 1}
                }
            return item
        })
        setPanier(newPanier)
    } 
    const deleteFromPanier = (produit) => {
        const newPanier = panier.filter((item) => item.produit.id !== produit.id)
    }

    return(
        <main>
            <div id="panier">
                <table>
                    <thead>
                        <tr>
                            <th class="photo">Photo</th>
                            <th class="nom">Nom</th>
                            <th class="prix">Prix (F CFA)</th>
                            <th class="quantite">Quantité</th>
                            <th class="total">Total (F CFA)</th>
                            <th class="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {panier.map((item) => 
                        <tr key={item.produit.id}>
                            <td class="photo"><img src={require(`..img/products/${item.product.photo}`)} alt={item.produit.nom} /></td>
                            <td class="nom">{item.produit.nom}</td>
                            <td class="prix">{item.produit.prix}</td>
                            <td class="quantite">{item.produit.qte}</td>
                            <td class="total">{item.qte * item.produit.prix}</td>
                            <td class="action">
                                <button class="plus-panier" onClick={() => plusQtePanier(item.produit)} alt={item.produit.nom}><img
                                 src={btnPlus} /></button>
                                 <button class="minus-panier" onClick={() => moinQtePanier(item.produit)} alt={item.produit.nom}><img
                                 src={btnMoins}/></button>
                                 <button class="remove-panier" onClick={() => deleteFromPanier(item.produit)} alt={item.produit.nom}><img 
                                 src={btnDelete}/></button></td>
                        </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" class="grandtotal">GRAND TOTAL (F CFA)</td>
                            <td colspan="4" class="grandtotalv">{panier.reduce((total, item) => total + item.qte * item.produit.prix, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
                <div id="btns-confirmer-annuler-panier">
                    <button id="confirmer-payer">Confirmer le panier et payer</button>
                    <button id="vider-panier">Vider le panier et reprendre</button>
                </div>
            </div>
        </main>
    )
}
export default Panier;