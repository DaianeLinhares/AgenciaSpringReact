package com.agencia.viagens.services;

import java.util.List;

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
	public List<Destino> findAll(){
		List<Destino> result = repository.findAll();
		return result;
	}
	
	@Transactional(readOnly = true)
	public Destino findById(Long id){
		Destino result = repository.findById(id).get();
		return result;
	}
}