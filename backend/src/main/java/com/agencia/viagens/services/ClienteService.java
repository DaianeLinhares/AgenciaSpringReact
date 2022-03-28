package com.agencia.viagens.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.agencia.viagens.entities.Cliente;
import com.agencia.viagens.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;

	@Transactional(readOnly = true)
	public List<Cliente> findAll() {
		List<Cliente> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Optional<Cliente> findById(Long id) {
		return repository.findById(id);
	}

	@Transactional(readOnly = true)
	public Cliente create(Cliente cliente) {
		return repository.save(cliente);
	}
	
	public Cliente update(Cliente cliente) {
		return repository.saveAndFlush(cliente);
	}	

	public void delete(Long id) {
		repository.deleteById(id);
	}
}
