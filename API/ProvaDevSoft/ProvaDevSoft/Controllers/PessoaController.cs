using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProvaDevSoft.Data;
using ProvaDevSoft.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProvaDevSoft.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PessoaController : ControllerBase
    {

        private readonly ILogger<PessoaController> _logger;
        private readonly ApiContext _context;

        public PessoaController(ILogger<PessoaController> logger, ApiContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public List<PessoaModel> Get()
        {
            
            return _context.Pessoas.ToList();
            
        }

        [HttpPost]
        public string Post(PessoaModel pessoaModel)
        {
            _context.Pessoas.Add(pessoaModel);
            _context.SaveChanges();

            return "Retorno";
        }
    }
}
