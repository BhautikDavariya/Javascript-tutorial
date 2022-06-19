// loops start 

		// whiole loop 

		// let count = 1;
		// while (count <= 10)
		//  {
		// 	document.write("bhautik");
		// 	document.write(`\t ${count}`);
		// 	document.write("<br>");
		// 	count ++;
		// }


			// do while loop 

		// let count = 1;
		// do
		// {
		// 	document.write("bhautik");
		// 	document.write(`\t ${count}`);
		// 	document.write("<br>");
		// 	count ++;
		// }
		// while (count <= 11);


		// for loop 

	// for (let count = 1; count <= 10; count++)
	// {
	// 	document.write("bhautik");
	// 	document.write(`\t ${count}`);
	// 	document.write("<br>");
	// }

	// even number 

	// let sum = 0;
	// for (let count = 0; count <= 100; count++) 
	// {
	// 	if (count %2 == 0) 
	// 	{
	// 		sum =  sum + count;
	// 		document.write(sum);
	// 	}

	// }


	document.write("<h1>even number using by while loop</h1>");
	let count = 1, sum = 0;
	while(count <= 100)
	{
		if (count %2 == 0) 
		{
			sum = sum + count;
		}
		count ++;
	}
	document.write(sum);


	document.write("<hr>");

document.write("<h1>odd number using by for loop</h1>");
	let sums = 0;
	for (let i = 1; i <= 100; i++) 
	{
		if (i %2 !== 0) 
		{
			sums = sums + i;
		}		
	}document.write(sums);
