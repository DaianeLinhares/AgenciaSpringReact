package com.agencia.viagens.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.agencia.viagens.entities.Destino;
import com.agencia.viagens.repositories.DestinoRepository;

@Service
public class DestinoService {

	@Autowired
	private DestinoRepository repository;

	@Transactional(readOnly = true)
	public List<Destino> findAll() {
		List<Destino> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Optional<Destino> findById(Long id) {
		return repository.findById(id);
	}

	@Transactional(readOnly = true)
	public Destino create(Destino destino) {
		return repository.save(destino);
	}

	public Destino update(Destino destino) {
		return repository.saveAndFlush(destino);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}
}