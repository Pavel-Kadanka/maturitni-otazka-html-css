// Example function to demonstrate functionality
window.startDriver = function () {
    const driver = window.driver.js.driver;

    const driverObj = driver({
        showProgress: true,
        steps: [
            { 
                element: '#praxe', 
                popover: { 
                    title: 'Praktická ukázka', 
                    description: 'V této části si ukážeme strukturu webové aplikace.' 
                } 
            },
            { 
                element: '#vzhled header', 
                popover: { 
                    title: 'Hlavička komponenty', 
                    description: 'Tag &lt;header&gt; můžeme použít i uvnitř sekcí nebo článků, ne jen pro celou stránku.' 
                } 
            },
            { 
                element: '#vzhled aside', 
                popover: { 
                    title: 'Boční panel (<aside>)', 
                    description: 'Tag &lt;aside&gt; se používá pro obsah, který souvisí s okolím, ale není jeho hlavní částí (např. boční menu, reklamy, profil).' 
                } 
            },
            { 
                element: '#vzhled main', 
                popover: { 
                    title: 'Hlavní obsah (<main>)', 
                    description: 'Tag &lt;main&gt; označuje unikátní a hlavní obsah dané stránky nebo sekce. Zde obsahuje tabulku s rozvrhem.' 
                } 
            },
            { 
                element: '#vzhled table', 
                popover: { 
                    title: 'Tabulka (<table>)', 
                    description: 'Pro strukturovaná data používáme &lt;table&gt;. Skládá se z &lt;thead&gt; (hlavička sloupců) a &lt;tbody&gt; (řádky s daty).' 
                } 
            }
        ]
    });

    driverObj.drive();
};

