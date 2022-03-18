package com.agencia.viagens.resurces;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agencia.viagens.entities.Destino;
import com.agencia.viagens.services.DestinoService;

@RestController
@RequestMapping(value = "/destinos")
public class DestinoResource {

	@Autowired
	private DestinoService service;

	@GetMapping
	public List<Destino> findAll() {
		return service.findAll();
	}
}
