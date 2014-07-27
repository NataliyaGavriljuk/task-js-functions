var textJson, 
	i = 0,  
	mas = [];
//об'єкт Галерея
var Gallery = {
/*-------------функція створення нової картинки( отримуємо об'єкт з полями та відповідними значеннями)---------------------------*/		
	Add: function(name, path, description, date){
	   	this.name = name;
	   	this.path = path;
	   	this.description = description;
	   	this.date = date;
	},
/*-------------функція редагування картинки по вказаному полю "name"---------------------------*/	
	Edit: function(name){
		console.log("Редагування наступних елементів по імені [" + name + "] виконано успішно: "); 
		for(; i < Gallery.images.length; i++){
			if( Gallery.images[i].name === name){
			 	Gallery.images[i] = new Gallery.Add("editElement","images/editPicture.png","edit", "2014-07-26T09:05:34.540Z" );
			 	console.log(Gallery.images[i]);
			 	Gallery.Serialise();//перезаливаємо інформацію у галерею у формат ISON
			}
		}	
		Gallery.ViewInfo();//ф-я, що виводить релультат роботи методу	
	},
/*-------------функція видалення картинки по вказаному імені---------------------------*/	
	Delete: function(name){
		for(; i < Gallery.images.length; i++){
			if( Gallery.images[i].name == name){
			 	var arr = Gallery.images.splice(i,1);//масив видалених обєктів	
			 	console.log("Видалення наступних елементів по імені [" + name + "] виконано успішно: "); 
			 	console.log(arr);//виводимо масив видалених елементів 	
			 	Gallery.Serialise();//перезаливаємо інформацію у галерею у формат ISON
			}
		}
		Gallery.ViewInfo();//ф-я, що виводить релультат роботи методу	
	},
/*-------------функція фільтрації картинок по вказаному полю та значенні---------------------------*/
	Filtration: function(field, value){
		var counter = 0;
		 for(; i < Gallery.images.length; i++){
		 	if(Gallery.images[i][field] == value){
				counter++;//лічильник файлів
				console.log(counter + "-й файл за вибраним критерієм " + field + " = [" + value+"] дорівнює" );	
				console.log(Gallery.images[i]);
		 	}
		}
	},
/*-------------функція сортування картинок по вказаному полю---------------------------*/
	Sorting: function(field){
		var masSort = [];//масив відсортованих файлів 
		console.log("Сортування картинок за полем [" + field + "] виконано успішно: ");
		for(; i < Gallery.images.length; i++){
		 	masSort  = (Gallery.images.sort(function(obj1, obj2) {
			  if (obj1[field] < obj2[field]) return -1;
			  if (obj1[field] > obj2[field]) return 1;
			  return 0;
			}));
		}
		Gallery.Serialise();//перезаливаємо інформацію у галерею у формат ISON
		Gallery.ViewInfo();//ф-я, що виводить релультат роботи методу
	},
/*-------------сериалізація об'єкта у формат JSON---------------------------*/	
	Serialise: function (){
		return textJson = JSON.stringify(Gallery, "", 4);
	},

/*-------------сериалізація об'єкта у формат JSON за полем [ім'я] ---------------------------*/
	SerialiseForName: function (){
		var text = JSON.stringify(Gallery.images, ["name"], 4);
 		console.log( "Серіалізація за ім'ям виконана успішно.\n" + text);
	},
/*-------------перевірка чи картинка має описання---------------------------*/
	ExsistDescription: function (){
	console.log("Перевірка існування опису картинок виконана успішно.\nСписок картинок без опису: " );
	for(; i < Gallery.images.length; i++){

		 	if(Gallery.images[i].description === ""){	
				console.log(Gallery.images[i]);
		 	}
		}
	},
/*-------------функція виведення результату роботи інших методів---------------------------*/
	ViewInfo: function (){
		console.log("Зміни занесені до галереї. " );
		console.log(textJson);
 	}
}	

/*-----------створюємо наступні картинки--------------------------------------*/
var picture = new Gallery.Add("giraffe","images/giraffe1.png", "beautiful giraffe", "2014-09-22T15:05:94.540Z"),
	picture1 = new Gallery.Add("dog","images/dog.png","fbg", "2014-07-22T09:05:94.540Z" ),
	picture2 = new Gallery.Add("giraffe","images/giraffe.png", "", "2014-04-22T15:05:94.540Z" ),
	picture3 = new Gallery.Add( "cat","images/cat.png","", "2014-07-22T05:05:94.540Z" ),
	picture4 = new Gallery.Add("dinosaur","images/dinosaur.png", "beautiful dinosaur", "2014-07-22T09:05:94.540Z" ),
	picture5 = new Gallery.Add("dog","images/dog.png", "about dogs", "2014-07-22T09:05:94.540Z");

mas.push(picture, picture1, picture2, picture3 , picture4, picture5);//заносимо наступні картинки у стек
Gallery.images = mas; //додаємо масив картинок у галерею
Gallery.Serialise();//серіалізуємо об'єкт Галерея
/*---------------виводимо в консоль серіалізований об'єкт з усіма файлами*/
console.log("Додавання картинок виконано успішно. \n В галареї містяться наступні картинки: " + textJson);

/*---------Для перевірки роботи функцій розкоментовувати  лише по одній!!!-------------------------------------*/
Gallery.Edit("dog"); //виклик редагування картинки
//Gallery.Delete("cat");//виклик видалення картинки
//Gallery.Filtration("name", "giraffe");//виклик фільтрації картинок 
//Gallery.Sorting("name");//виклик сортування картинок
//Gallery.ExsistDescription();//виклик перевірки на існування опису картинки
//Gallery.SerialiseForName();//Серіалізація по імені картинок
