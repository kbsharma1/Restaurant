//   function getMenu() {
//     return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
//       .then(response => response.json())
//       .then(data => data.menuItems);
//   }

//   function takeOrder() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const burgers = ['Burger A', 'Burger B', 'Burger C'];
//         const order = burgers[Math.floor(Math.random() * burgers.length)];
//         resolve(order);
//       }, 2500);
//     });
//   }

//   function orderPrep(order) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve({ order_status: true, paid: false, order });
//       }, 1500);
//     });
//   }

//   function payOrder(orderData) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve({ ...orderData, paid: true });
//       }, 1000);
//     });
//   }

//   function thankyouFnc() {
//     alert('Thank you for eating with us today!');
//   }

//   async function startOrder() {
//     try {
//       const menuItems = await getMenu();
//       const menuContainer = document.querySelector('.cardflex');

//       menuItems.forEach(item => {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//           <img src="./rger 1.png" alt="${item}">
//           <div class="container">
//               <div>
//                   <h1>${item}</h1>
//                   <p>$5.59/-</p>
//               </div>
//               <div>
//                   <i class="fa-solid fa-plus"></i>
//               </div>
//           </div>
//         `;
//         menuContainer.appendChild(card);
//       });

//       const order = await takeOrder();
//       console.log('Order:', order);

//       const orderStatus = await orderPrep(order);
//       console.log('Order Status:', orderStatus);

//       const paidStatus = await payOrder(orderStatus);
//       console.log('Paid Status:', paidStatus);

//       if (paidStatus.paid) {
//         thankyouFnc();
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }


        // async function getMenu() {
        //     try {
        //         const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        //         const menuItems = await response.json();
        //         const menuList = document.createElement('ul');

        //         menuItems.forEach(item => {
        //             const listItem = document.createElement('li');
        //             listItem.textContent = `${item.name} - $${item.price}`;
        //             menuList.appendChild(listItem);
        //         });

        //         document.body.appendChild(menuList);
        //     } catch (error) {
        //         console.error('Error fetching menu:', error);
        //     }
        // }

        // function takeOrder() {
        //     return new Promise(resolve => {
        //         setTimeout(() => {
        //             const burgers = ['Burger A', 'Burger B', 'Burger C'];
        //             const randomBurgers = [];
        //             for (let i = 0; i < 3; i++) {
        //                 randomBurgers.push(burgers[Math.floor(Math.random() * burgers.length)]);
        //             }
        //             resolve(randomBurgers);
        //         }, 2500);
        //     });
        // }

        // function orderPrep() {
        //     return new Promise(resolve => {
        //         setTimeout(() => {
        //             resolve({ order_status: true, paid: false });
        //         }, 1500);
        //     });
        // }

        // function payOrder() {
        //     return new Promise(resolve => {
        //         setTimeout(() => {
        //             resolve({ order_status: true, paid: true });
        //         }, 1000);
        //     });
        // }

        // function thankyouFnc() {
        //     alert('Thank you for eating with us today!');
        // }

        // async function main() {
        //     await getMenu();
        //     document.getElementById('orderButton').addEventListener('click', async () => {
        //         try {
        //             const order = await takeOrder();
        //             console.log('Order:', order);

        //             const prepStatus = await orderPrep();
        //             console.log('Preparation Status:', prepStatus);

        //             const paymentStatus = await payOrder();
        //             console.log('Payment Status:', paymentStatus);

        //             if (paymentStatus.paid) {
        //                 thankyouFnc();
        //             }
        //         } catch (error) {
        //             console.error('Error:', error);
        //         }
        //     });
        // }

        // main();



        async function getMenu() {
            try {
                const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
                const menuItems = await response.json();
                
                const cardContainers = document.querySelectorAll('.container');
                menuItems.forEach((item, index) => {
                    if (index < cardContainers.length) {
                        const container = cardContainers[index];
                        container.querySelector('h1').textContent = item.name;
                        container.querySelector('p').textContent = `$${item.price}/-`;
                    }
                });
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        }
    
        function takeOrder() {
            return new Promise(resolve => {
                setTimeout(() => {
                    const burgers = ['Burger A', 'Burger B', 'Burger C'];
                    const randomBurgers = [];
                    for (let i = 0; i < 3; i++) {
                        randomBurgers.push(burgers[Math.floor(Math.random() * burgers.length)]);
                    }
                    resolve(randomBurgers);
                }, 2500);
            });
        }
    
        function orderPrep() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({ order_status: true, paid: false });
                }, 1500);
            });
        }
    
        function payOrder() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({ order_status: true, paid: true });
                }, 1000);
            });
        }
    
        function thankyouFnc() {
            alert('Thank you for eating with us today!');
        }
    
        async function main() {
            await getMenu();
    
            const orderButton = document.getElementById('orderButton');
            orderButton.addEventListener('click', async () => {
                try {
                    const order = await takeOrder();
                    console.log('Order:', order);
    
                    const prepStatus = await orderPrep();
                    console.log('Preparation Status:', prepStatus);
    
                    const paymentStatus = await payOrder();
                    console.log('Payment Status:', paymentStatus);
    
                    if (paymentStatus.paid) {
                        thankyouFnc();
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            });
        }
    
        main();