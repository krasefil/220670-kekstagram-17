"use strict";
var url = [];
for (var i = 1; i < 26; i++) {
    url.push(String(i));
};
var messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!;'
];
var names = [
    'Alex','Margo','sibuyan','yan','vovan','katya','petya','natali','vera'
];
var avatars = [
    'avatar-1','avatar-2','avatar-3','avatar-4','avatar-5','avatar-6'
];

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    return rand = Math.round(rand);
  };

function selectMessages(array) {
    var message = [];
    var quantity = randomInteger(1,2);
    for(var i = 0; i < quantity; i++) {
        message[i] += array[randomInteger(0,array.length - 1)];
    };
    return message;
};

var createArrayPicture = function() {
    var arrayPictures = [];
    for(var i = 0; i < 25; i++) {
        arrayPictures[i] = {
            url: url[i],
            likes: randomInteger(15, 200),
            comments: {
                avatar: 'img/' + avatars[randomInteger(0,avatars.length -1)] + '.svg',
                message: selectMessages(messages),
                name: names[randomInteger(0,names.length - 1)]
            }
        };
    };
    return arrayPictures;
};

var arrayImages = createArrayPicture();

var createPicture = function(cardData) {
  var picture = document.querySelector('#picture').cloneNode(true).content;
  var img = picture.querySelector('.picture__img');
  img.src = "photos/" + cardData.url + '.jpg';
  var likes = picture.querySelector('.picture__likes').textContent = cardData.likes;
  var comments = picture.querySelector('.picture__comments').innerHTML = cardData.comments.message.length;
  return picture;
}

function drawingPicture() {
  for (var i = 0; i < 25; i++) {
    var pictureItem = createPicture(arrayImages[i]);
    document.querySelector('.pictures').appendChild(pictureItem);
  }
};

drawingPicture();

var pet = document.querySelector('.img-filters');
pet.classList.remove('img-filters--inactive');

