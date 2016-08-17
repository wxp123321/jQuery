var friendsList = ['�й�', '�ձ�', '����', '����','�ɹ�'];

var userFaces = { '0.gif': '΢Ц', '1.gif': 'Ʋ��', '2.gif': 'ɫ', '3.gif': '����', '4.gif': '����', '5.gif': '����', '6.gif': '����', '7.gif': '����', '8.gif': '˯', '9.gif': '���', '10.gif': '����', '11.gif': '��ŭ', '12.gif': '��Ƥ', '13.gif': '����', '14.gif': '����', '15.gif': '�ѹ�', '16.gif': '��', '17.gif': '�亹', '18.gif': 'ץ��', '19.gif': '��', '20.gif': '͵Ц', '21.gif': '�ɰ�', '22.gif': '����', '23.gif': '����', '24.gif': '����', '25.gif': '��', '26.gif': '����', '27.gif': '����', '28.gif': '��Ц', '29.gif': '���', '30.gif': '�ܶ�', '31.gif': '����', '32.gif': '����', '33.gif': '��', '34.gif': '��', '35.gif': '��ĥ', '36.gif': '˥', '37.gif': '����', '38.gif': '�ô�', '39.gif': '�ټ�', '40.gif': '����', '41.gif': '�ٱ�', '42.gif': '����', '43.gif': '�ܴ���', '44.gif': '��Ц', '45.gif': '��ߺ�', '46.gif': '�Һߺ�', '47.gif': '��Ƿ', '48.gif': '����', '49.gif': 'ί��', '50.gif': '�����', '51.gif': '����', '52.gif': '����', '53.gif': '��', '54.gif': '����', '55.gif': '�˵�', '56.gif': '����', '57.gif': 'ơ��', '58.gif': '���� ', '59.gif': 'ƹ��', '60.gif': '����', '61.gif': '��', '62.gif': '��ͷ', '63.gif': 'õ��', '64.gif': '��л', '65.gif': 'ʾ��', '66.gif': '����', '67.gif': '����', '68.gif': '����', '69.gif': '����', '70.gif': 'ը��', '71.gif': '��', '72.gif': '����', '73.gif': 'ư��', '74.gif': '���', '75.gif': '����', '76.gif': '̫��', '77.gif': '����', '78.gif': 'ӵ��', '79.gif': 'ǿ', '80.gif': '��', '81.gif': '����', '82.gif': 'ʤ��', '83.gif': '��ȭ', '84.gif': '����', '85.gif': 'ȭͷ', '86.gif': '�', '87.gif': '����', '88.gif': 'NO', '89.gif': 'OK', '90.gif': '����', '91.gif': '����', '92.gif': '����', '93.gif': '����', '94.gif': '���', '95.gif': 'תȦ', '96.gif': '��ͷ', '97.gif': '��ͷ', '98.gif': '����', '99.gif': '����', '100.gif': '����', '101.gif': '����', '102.gif': '����', '103.gif': '��̫��', '104.gif': '��̫��', '105.gif': '����', '106.gif': '��', '107.gif': '����', '108.gif': '˯��', '109.gif': 'С��Ƥ', '110.gif': '����', '111.gif': '��ŭ', '112.gif': '͵Ц', '113.gif': '΢Ц', '114.gif': '��', '115.gif': '��' };

$(function(){
	
});

window.onload = function() {
	//��ʼ��atsome
	initAtSome();

	//��ʼ��ͼƬ
	initFaces();
};

function initFaces(){
	var str  = "<div class='showFace'>";
	for( var key in userFaces) {
		str += "<img alt='"+ userFaces[key] +"' src='faces/"+key+"'>"
	}
	str += "</div>";

	var $faceDiv = $(str);

	$faceDiv.appendTo( ".insertFace" ).hide().css({
		left: $( ".insertFace" ).offset.left + "px",
		top: $(".insertFace").offset.top + 16 + "px",
	}).find( "img" ).click(function() {
		setText( "[" + $(this).attr("alt") + "]" );
	});

	$(".insertFace").hover(function() {
		$faceDiv.show();
	},function() {
		$faceDiv.hide();

	});	
}


function initAtSome() {
	var h = $(".atSome").height();
	var str = "";
	str += "<ul class='atSomeList'>";
	for( var i = 0; i < friendsList.length; i++ ) {
		str += "<li>";
		str += 		"<a herf='javascript:'>@"+friendsList[i]+"</a>";
		str += "</li>"
	}
	str += "</ul>";

	var $atSomeList = $(str);
	$(".atSome").append($atSomeList).hover(function(){
		$atSomeList.show();
	},function(){
		$atSomeList.hide();
	});
	$atSomeList.css({
		top: ($(".atSome").offset().top + h - 15) +"px",
		left: ($(".atSome").offset().left + 14) + "px"
	}).hide().find("a").click(function(){
		setText($(this).text());
	});
}

function setText(str) {
	$("#msgTxt").text($("#msgTxt").text() + str);

}
