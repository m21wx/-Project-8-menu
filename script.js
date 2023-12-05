	let box_menu = document.querySelector('.box-menu');

	let menu =[
			{
				id:1,
				cateory:'all',
				title:'title-1',
				parse:25,
				img:'./images/f-1.jpg',
				p:'majasdjklsjadojskldjklsjdklsajdl'
				
			},
			{
				id:2,
				cateory:'lunch',
				title:'title-2',
				parse:30,
				img:'./images/f-2.jpg',
				p:'majasdjklssssdjklsjdklsajdl'
				
			},
			{
				id:3,
				cateory:'breekfat',
				title:'title-3',
				parse:30,
				img:'./images/f-3.jpg',
				p:'majasdjklsjadojssssdjklsjdklsajdl'
				
			},
			{
				id:4,
				cateory:'dinner',
				title:'title-4',
				parse:15,
				img:'./images/f-4.jpg',
				p:'majasdjklsjad4sjdklsajdl'
				
			},
			{
				id:5,
				cateory:'all',
				title:'title-5',
				parse:20,
				img:'./images/f-5.jpg',
				p:'majdklsajdl'
				
			},
			{
				id:6,
				cateory:'lunch',
				title:'title-6',
				parse:50,
				img:'./images/f-6.jpg',
				p:'majdklsajdl'
				
			},
			
			{
				id:7,
				cateory:'all',
				title:'title-7',
				parse:25,
				img:'./images/f-1.jpg',
				p:'majasdjklsjadojskldjklsjdklsajdl'
				
			},
			{
				id:8,
				cateory:'lunch',
				title:'title-8',
				parse:30,
				img:'./images/f-2.jpg',
				p:'majasdjklssssdjklsjdklsajdl'
				
			},
			{
				id:9,
				cateory:'breekfat',
				title:'title-9',
				parse:30,
				img:'./images/f-3.jpg',
				p:'majasdjklsjadojssssdjklsjdklsajdl'
				
			},
			{
				id:10,
				cateory:'dinner',
				title:'title-10',
				parse:15,
				img:'./images/f-4.jpg',
				p:'majasdjklsjad4sjdklnbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbsajdl'
				
			},
			{
				id:11,
				cateory:'all',
				title:'title-11',
				parse:20,
				img:'./images/f-5.jpg',
				p:'majdklsajdl'
				
			},
			{
				id:12,
				cateory:'lunch',
				title:'title-12',
				parse:50,
				img:'./images/f-6.jpg',
				p:'majdklsajdl'
				
			},
			
			
		];
		
		
		let flterBtn = document.querySelectorAll('.link-menu ul li');
		
		
			window.addEventListener('DOMContentLoaded',()=>{
				displayNenuItems(menu)
			})
			
			
			flterBtn.forEach(btn=>{
				btn.addEventListener('click',(e)=>{
				const cateory =	e.currentTarget.dataset.id;
		
				menuCategory = menu.filter(function(menuItem){
					
					
					if(menuItem.cateory === cateory){
						return menuItem
					}
				})
				
					if(cateory =='all'){
						
						displayNenuItems(menu)
					}else{
						displayNenuItems(menuCategory)
					}
				})
			})
			
			
			
		
		function displayNenuItems(menuItem){
			box_menu.innerHTML ='';
			let displayMenu = menuItem.map((item)=>{
				
					return `<div class='box'>
								<div class='img'> <img src='${item.img}'/></div>
								<div class='content'>
								<h3> ${item.title} <span>$${item.parse} </span> </h3>
								<p>${item.p} </p>
								</div>
							</div>
							`
				})
				displayMenu = displayMenu.join('')
				
				box_menu.innerHTML += displayMenu;
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
