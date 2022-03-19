package com.agencia.viagens.resurces;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agencia.viagens.entities.Contato;
import com.agencia.viagens.services.ContatoService;

@RestController
@RequestMapping(value = "/contatos")
@CrossOrigin(origins = "http://localhost:3000")
public class ContatoResource {

	@Autowired
	private ContatoService service;

	@PostMapping
	public Contato saveContato(@RequestBody Contato contato) {
		return service.saveContato(contato);
	}

	@GetMapping
	public List<Contato> findAll() {
		return service.findAll();
	}
}