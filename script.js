// Example function to demonstrate functionality
window.startDriver = function () {
    const driver = window.driver.js.driver;

    const driverObj = driver({
        showProgress: true,
        steps: [
            {
                element: '#praxe',
                popover: {
                    title: 'Praktická ukázka Layoutu',
                    description: 'V této části vidíme komplexní rozvržení aplikace. Všimni si, jak je stránka rozdělena na dvě hlavní části (sidebar a main) pomocí Flexboxu.'
                }
            },
            {
                element: '#vzhled header',
                popover: {
                    title: 'Hlavička komponenty (<header>)',
                    description: 'Tag &lt;header&gt; zde neobaluje celou stránku, ale jen tuto konkrétní kartu. Obsahuje název sekce a ovládací prvky (tlačítko odhlásit).'
                }
            },
            {
                element: '#vzhled aside',
                popover: {
                    title: 'Boční panel (<aside>)',
                    description: 'Sémantický tag pro obsah, který "stojí bokem". Zde obsahuje profil studenta a navigaci. Má fixní šířku.'
                }
            },
            {
                element: '#vzhled main',
                popover: {
                    title: 'Hlavní obsah (<main>)',
                    description: 'Zde se nachází to nejdůležitější – rozvrh. Díky vlastnosti <code>flex-grow: 1</code> tento element zabírá veškerý zbylý prostor vedle panelu.'
                }
            },
            {
                element: '#vzhled table',
                popover: {
                    title: 'Tabulka (<table>)',
                    description: 'Základní kontejner pro strukturovaná data. Používáme zde Bootstrap třídy <code>table-hover</code> pro efekt při najetí myší.'
                }
            },
            {
                element: '#content-table-head',
                popover: {
                    title: 'Hlavička tabulky (<thead>)',
                    description: 'Seskupuje popisky sloupců. Obsahuje řádek <code>&lt;tr&gt;</code>, uvnitř kterého jsou buňky <code>&lt;th&gt;</code> (Table Header), které jsou automaticky tučné.'
                }
            },
            {
                element: '#content-table-body',
                popover: {
                    title: 'Tělo tabulky (<tbody>)',
                    description: 'Tato sekce obsahuje samotná data. Zde by se v reálné aplikaci dynamicky generovaly řádky z databáze.'
                }
            },
            {
                element: '#priklad-tr',
                popover: {
                    title: 'Řádek tabulky (<tr>)',
                    description: 'Zkratka "Table Row". Tento element reprezentuje jeden celý záznam v rozvrhu (jeden předmět).'
                }
            },
            {
                element: '#priklad-td',
                popover: {
                    title: 'Datová buňka (<td>)',
                    description: 'Zkratka "Table Data". Toto je nejmenší stavební kámen tabulky, který nese konkrétní informaci (zde název předmětu "Český jazyk").'
                }
            },
        ]
    });

    driverObj.drive();
};