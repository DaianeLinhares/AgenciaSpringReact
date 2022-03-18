package com.agencia.viagens.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.agencia.viagens.entities.Contato;
import com.agencia.viagens.repositories.ContatoRepository;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repository;

	@PostMapping
	public Contato saveContato(@RequestBody Contato contato) {
		return contato = repository.save(contato);
	}

	@Transactional(readOnly = true)
	public List<Contato> findAll() {
		List<Contato> result = repository.findAll();
		return result;
	}
}