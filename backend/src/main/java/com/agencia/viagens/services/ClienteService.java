package com.agencia.viagens.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.agencia.viagens.entities.Cliente;
import com.agencia.viagens.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;

	@PostMapping
	public Cliente saveCliente(@RequestBody Cliente cliente) {
		return cliente = repository.save(cliente);
	}

	@Transactional(readOnly = true)
	public List<Cliente> findAll() {
		List<Cliente> result = repository.findAll();
		return result;
	}
}
