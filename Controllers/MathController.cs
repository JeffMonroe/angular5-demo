using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularDemo.Controllers
{
    [Route("api/[controller]")]
    public class MathController : Controller
    {
        [HttpGet("[action]")]
        public double Multiply(string firstNumber, string secondNumber)
        {
			double num1;
			double num2;
			if (double.TryParse(firstNumber, out num1) && double.TryParse(secondNumber, out num2))
			{
				return num1 * num2;
			}
			else return 0;
        }
    }
}
