function load () {
		document.getElementById('edit1').style="display:none;";
	
	}
	function register () {
		document.getElementById('register').style="height:100%;";
		document.getElementById('login').style="display:none";
		document.getElementById('check').value="Login";
		//document.getElementById('header').style="display:none";
	}
	function login () {
		document.getElementById('register').style="display:none;";
		document.getElementById('login').style="display:block;";
		document.getElementById('check').value="Register";
		//document.getElementById('header').style="display:none";
	}
	function check () {
		
		var che= document.getElementById('check').value;
		if(che=="Login")
		{
		document.getElementById('register').style="display:none;";
		document.getElementById('login').style="display:block;";
		document.getElementById('check').value="Register";
		}
		else
		{
			document.getElementById('register').style="height:100%;";
			document.getElementById('login').style="display:none";
			document.getElementById('check').value="Login";
		}
		
	}
	function validation()
	{
		
		var check=document.getElementById('email').type;
		if(check=="email")
		{
			var value=document.getElementById('email').value;
			if(value=="")
			{

				document.getElementById('error').innerHTML="Enter the Email Address";
			}

			else
				document.getElementById('error').innerHTML="";
		}
	}

	function edit(name)
	{
		var i=1;
		for (i = 0; i<=10; i++) {
			if(name==i)
			{
				var e="edit"+name;
				document.getElementById(name).style="display:none;";
				document.getElementById(e).style="display:block;";
				console.log("1");
			}
		}
	}

	function cancel(can)
	{
		var i=1;
		for (i = 0; i<=10; i++) {

			if(can==i)
			{

				var f="edit"+can;
				console.log(f);
				document.getElementById(f).style="display:none;";
				document.getElementById(can).style="display:block;";
				
			}
		}
	}

	function submit()
	{
		console.log("1");
	}

	function submitt(subm)
	{
		var i=1;
		for (i = 0; i<=10; i++) {
			
			if(subm==i)
			{
				var k="edit"+subm+subm;
				var p="edit"+subm;
				console.log(k);
				var value=document.getElementById(k).value;
				var dis="display"+subm;
				var store=document.getElementById(dis).innerHTML;
				value=value+store;
				document.getElementById(dis).innerHTML=value;
				document.getElementById(p).style="display:none;";
				document.getElementById(subm).style="display:block;";
				
			}
		}
	}

