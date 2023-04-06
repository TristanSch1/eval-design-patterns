import { Catalog } from "./Observer/Catalog";
import { User } from "./Observer/User";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`

/**
 * L'Observer permet de notifier les utilisateurs lors
 * d'un ajout ou d'une suppression d'un produit dans le
 * catalogue
 *
 * Le Prototype permet de créer des registres d'opérations
 * en fonction des opérations effectuées par les utilisateurs
 *
 * Le Memento permet de sauvegarder et restaurer le catalogue
 *
 */

const catalog = new Catalog();

const user1 = new User("Robert", "rober@gmail.com", catalog);
const user2 = new User("Pascal", "pascal@gmail.com", catalog);

// Attach observers
catalog.attach(user1);
catalog.attach(user2);

// Trigger some events
user1.addProduct("tomates");
user2.addProduct("concombres");
user2.addProduct("courgettes");

// Sauvegarde du catalogue
const catalogSave = catalog.save();

/**
 * On retire le user2 des observateurs
 * Il ne sera donc plus notifié lors d'un
 * ajout ou d'une suppression
 */
catalog.remove(user2);

user1.removeProduct("tomates");

user1.addProduct("pizza")

catalog.display();

// Affichage des registres
user1.createRegistry().print();
user2.createRegistry().print();

console.log("#############");
// Restauration du catalogue
catalog.restore(catalogSave);

catalog.display();



